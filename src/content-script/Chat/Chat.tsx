import classNames from 'classnames'
import './Chat.scss'

export enum MessageType {
  Q = 0,
  A = 1,
}

export type Message = {
  type: MessageType
  messageId: string
  message: string
}

export type ChatProps = {
  messages: Message[]
}

export const Chat = (props: ChatProps) => {
  return (
    <div className="chatWithPageExtension-chat__container">
      {props.messages.map(({ type, messageId, message }) => {
        return (
          <div
            key={messageId}
            className={classNames({
              'chatWithPageExtension-chat__messageItem': true,
              'chatWithPageExtension-chat__messageItem--left': type === MessageType.A,
              'chatWithPageExtension-chat__messageItem--right': type === MessageType.Q,
            })}
          >
            <div className="chatWithPageExtension-chat__message">{message}</div>
          </div>
        )
      })}
    </div>
  )
}
