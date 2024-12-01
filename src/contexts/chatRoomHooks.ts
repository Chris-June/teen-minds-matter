import { useContext } from 'react';
import { ChatRoomContext } from './ChatRoomContext';

export const useChatRoom = () => {
  const context = useContext(ChatRoomContext);
  if (!context) {
    throw new Error('useChatRoom must be used within a ChatRoomProvider');
  }
  return context;
};
