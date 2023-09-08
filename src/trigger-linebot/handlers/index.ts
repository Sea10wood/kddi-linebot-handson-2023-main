import { WebhookEvent } from '@line/bot-sdk'
import { messagesHandler } from './messages'
import { errorLogger } from '~/utils/firebase/logger'

// イベントの種類によって処理を分ける
export const handlers = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'message': // メッセージイベント
        return await messagesHandler(event)
      case 'follow': // フォローイベント
        return
      case 'join': // ジョインイベント
        return
      case 'postback': // ポストバックイベント
        return
      default:
    }
  } catch (err) {
    errorLogger(err)
    throw new Error('handlers')
  }
}
