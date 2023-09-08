import { Message, MessageEvent, TextEventMessage } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { errorLogger } from '~/utils/firebase/logger'

export const messageTextHandler = async (event: MessageEvent & { message: TextEventMessage }): Promise<void> => {
  try {
    // 送られてきたテキスト
    const { text } = event.message

    // 以下に処理を書いていく

    // 返信するメッセージ
    const replyMessage: Message = {
      type: 'text',
      text: text // 返しているテキスト
    }

    // 返信処理
    await lineClient.replyMessage(event.replyToken, replyMessage)
  } catch (err) {
    errorLogger(err)
    throw new Error('message text handler')
  }
}
