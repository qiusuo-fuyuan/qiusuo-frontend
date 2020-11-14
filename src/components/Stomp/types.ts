enum MessageType {
  MESSAGE = 0,
  NOTIFICATION = 1
}

interface Message {
  communityId: String
  channelId: String
  type: MessageType
  content: string
}