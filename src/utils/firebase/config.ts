import { AppOptions, cert } from 'firebase-admin/app'
import { GOOGLE_CLOUD_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } from '../secrets'

export const firebaseAdminOptions: AppOptions = {
  credential: cert({
    projectId: GOOGLE_CLOUD_ID,
    clientEmail: GOOGLE_CLIENT_EMAIL,
    privateKey: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  })
}
