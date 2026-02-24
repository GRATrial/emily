import React from 'react';

interface KnowledgePanelProps {
  isDark?: boolean;
}

export const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ isDark = false }) => {
  // No knowledge panel for "Emily Smith" search in this simulation
  return null;
};
