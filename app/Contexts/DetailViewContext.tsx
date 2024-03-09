'use client'
import React, { createContext, useState, useContext } from 'react';
import { DetailViewsContextType } from '../../lib/@/types';


export const DetailViewsContext = createContext<DetailViewsContextType | undefined>(undefined);

// Custom hook to access the DetailViewsContext
export const useDetailViews = (): DetailViewsContextType => {
  const context = useContext(DetailViewsContext);
  if (!context) {
    throw new Error('useDetailViews must be used within a DetailViewProvider');
  }
  return context;
};

// DetailViewProvider component to manage detail views state
export const DetailViewProvider  = ({ children }: {children:React.ReactNode}) => {
  const [visibleDetailView, setVisibleDetailView] = useState(false);
  const [detailId, setDetailId] = useState<number | null>(null);

  // Open detail view with specific ID
  const openDetailView = (id: number): void => {
    setDetailId(id);
    setVisibleDetailView(true);
  };

  // Close detail view
  const closeDetailView = (): void => {
    setVisibleDetailView(false);
    setDetailId(null);
  };

  // Context value to be provided to consuming components
  const contextValue: DetailViewsContextType = {
    visibleDetailView,
    id: detailId,
    openDetailView,
    closeDetailView
  };

  return (
    <DetailViewsContext.Provider value={contextValue}>
      {children}
    </DetailViewsContext.Provider>
  );
};