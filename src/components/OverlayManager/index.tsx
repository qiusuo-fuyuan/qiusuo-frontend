import { Community } from 'AppComponents/Overlay/Community';
import * as React from 'react';
import { OverlayContext, OverlayType } from '../Overlay';

export const OverlayManager: React.FC = () => (
  <OverlayContext.Consumer>
    {(overlay) => {
      switch (overlay.type) {
        case OverlayType.community:
          return <Community overlay={overlay} />;
        default:
          return null;
      }
    }}
  </OverlayContext.Consumer>
);

export default OverlayManager;
