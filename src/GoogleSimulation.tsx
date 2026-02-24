import React, { useState, useMemo, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Tabs } from './components/Tabs';
import { ResultCard } from './components/ResultCard';
import { PeopleAlsoSearchFor } from './components/PeopleAlsoSearchFor';
import { KnowledgePanel } from './components/KnowledgePanel';
import {
  RESULTS_Emily_Smith,
  type SimResult
} from './data/results';
import { getRelatedSearches } from './data/relatedSearches';
import { trackPageView, trackTabChange, trackPagination, trackSearch, trackResultClick } from './utils/tracking';

interface GoogleSimulationProps {
  searchType?: 'emily';
}

const GoogleSimulation: React.FC<GoogleSimulationProps> = ({ searchType = 'emily' }) => {
  const [searchQuery, setSearchQuery] = useState('Emily Smith');
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // Force light mode as requested
  const isDark = false;

  // Track page view on mount
  useEffect(() => {
    trackPageView('emily', currentPage, activeTab);
  }, []);

  // Reset to first page when activeTab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Get results for Emily Smith
  const allResults = useMemo(() => {
    console.log('Loading RESULTS_Emily_Smith:', RESULTS_Emily_Smith);
    if (!RESULTS_Emily_Smith || RESULTS_Emily_Smith.length === 0) {
      console.error('RESULTS_Emily_Smith is empty or undefined!');
      return [];
    }
    console.log('Loaded', RESULTS_Emily_Smith.length, 'results');
    return RESULTS_Emily_Smith;
  }, []);

  // Filter results by active tab
  const filteredResults = useMemo(() => {
    let filtered = allResults;
    if (activeTab !== 'All' && activeTab !== 'Videos' && activeTab !== 'Images' && activeTab !== 'News' && activeTab !== 'Short videos' && activeTab !== 'Shopping') {
      filtered = filtered.filter(result => result.platform === activeTab);
    }
    return filtered;
  }, [allResults, activeTab]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = filteredResults.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 10;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  // Safety check
  if (!allResults || allResults.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>No results found</h1>
        <p>Emily Smith results are not available.</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <TopBar searchQuery={searchQuery} onSearchChange={(q) => { setSearchQuery(q); trackSearch(q, 'emily'); }} isDark={isDark} />
      <Tabs activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); trackTabChange(tab, 'emily'); }} isDark={isDark} />

      <div style={{ maxWidth: '1128px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', gap: '32px', paddingTop: '20px' }}>
          {/* Main Results Column */}
          <div style={{ flex: '1', minWidth: 0 }}>
            {/* Results Count */}
            <div style={{ color: '#70757a', fontSize: '14px', marginBottom: '16px' }}>
              About {filteredResults.length} results
            </div>

            {/* Results List */}
            {filteredResults.length === 0 ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <p style={{ color: '#70757a', fontSize: '16px' }}>
                  No results found. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div>
                {paginatedResults.map((result, index) => {
                  return (
                    <React.Fragment key={result.id}>
                      <ResultCard
                        result={result}
                        onOpen={(result) => {
                          trackResultClick(result.id, result.platform, result.displayName, 'emily');
                          // Low-disc persona: no profile views open, just track the click
                        }}
                        isDark={isDark}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredResults.length > 0 && totalPages > 1 && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '4px',
                marginTop: '32px',
                marginBottom: '32px',
                paddingTop: '20px',
                borderTop: '1px solid #ebebeb'
              }}>
                {currentPage > 1 && (
                  <button
                    onClick={() => { const p = currentPage - 1; setCurrentPage(p); trackPagination(p, 'emily'); }}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #dadce0',
                      borderRadius: '4px',
                      backgroundColor: 'transparent',
                      color: '#1a0dab',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>‹</span> Previous
                  </button>
                )}

                {getPageNumbers().map((page, index) => {
                  if (page === '...') return <span key={`ellipsis-${index}`} style={{ padding: '0 8px', color: '#70757a' }}>...</span>;
                  const pageNum = page as number;
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => { setCurrentPage(pageNum); trackPagination(pageNum, 'emily'); }}
                      style={{
                        minWidth: '40px',
                        height: '40px',
                        padding: '0 8px',
                        border: '1px solid #dadce0',
                        borderRadius: '4px',
                        backgroundColor: isActive ? '#1a0dab' : 'transparent',
                        color: isActive ? '#fff' : '#1a0dab',
                        fontSize: '14px',
                        cursor: 'pointer',
                        fontWeight: isActive ? 500 : 400
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {currentPage < totalPages && (
                  <button
                    onClick={() => { const p = currentPage + 1; setCurrentPage(p); trackPagination(p, 'emily'); }}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #dadce0',
                      borderRadius: '4px',
                      backgroundColor: 'transparent',
                      color: '#1a0dab',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Next <span>›</span>
                  </button>
                )}
              </div>
            )}

            {/* People Also Search For */}
            {activeTab === 'All' && filteredResults.length > 0 && (
              <PeopleAlsoSearchFor 
                searches={getRelatedSearches(searchQuery || 'Emily Smith')} 
                searchQuery={searchQuery}
                onSearchClick={setSearchQuery}
              />
            )}
          </div>

          {/* Knowledge Panel - Right Side */}
          {activeTab === 'All' && currentPage === 1 && (
            <KnowledgePanel isDark={isDark} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleSimulation;
