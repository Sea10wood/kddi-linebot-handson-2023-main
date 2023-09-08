import { MessageEvent, TextEventMessage } from '@line/bot-sdk'
import { errorLogger } from '~/utils/firebase/logger'
import { messageTextHandler } from './text'

// メッセージの種類によって処理を分ける
export const messagesHandler = async (event: MessageEvent): Promise<void> => {
  try {
    switch (event.message.type) {
      case 'text': // 文字が送られてきた時
        return await messageTextHandler(event as MessageEvent & { message: TextEventMessage })
      case 'image': // 画像が送られてきた時
        return
      case 'sticker': // スタンプが送られてきた時
        return
      default:
    }
  } catch (err) {
    errorLogger(err)
    throw new Error('messages handler')
  }
}
