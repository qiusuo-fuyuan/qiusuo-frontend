import { ChannelForm } from 'AppComponents/Overlay/ChannelForm';
import { CommunityForm } from 'AppComponents/Overlay/CommunityForm';
import * as React from 'react';
import { OverlayContext, OverlayType } from '../Overlay';

export const OverlayManager: React.FC = () => (
  <OverlayContext.Consumer>
    {(overlay) => {
      switch (overlay.type) {
        case OverlayType.create_community:
          return <CommunityForm overlay={overlay} />;
        case OverlayType.create_channel:
            return <ChannelForm overlay={overlay} />;
        default:
          return null;
      }
    }}
  </OverlayContext.Consumer>
);

export default OverlayManager;
