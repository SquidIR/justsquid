import { useEffect } from 'react';
import * as CursorEffects from 'cursor-effects';

const CursorEffect = () => {
  useEffect(() => {
    // Initialize the following dot cursor effect
    CursorEffects.followingDotCursor({
      color: "#4a4a4aff", // Red dot color
    });

    // Force the cursor effect elements to be on top
    const style = document.createElement('style');
    style.textContent = `
      .cursor-effects * {
        z-index: 9999 !important;
      }
      canvas[data-cursor-effects] {
        z-index: 9999 !important;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CursorEffect;
