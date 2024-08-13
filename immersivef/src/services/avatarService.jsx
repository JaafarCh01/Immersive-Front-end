// avatarService.js
import { createUser, generateAvatar } from '@readyplayerme/visage-sdk';

export async function createAndGenerateAvatar() {
  try {
    const user = await createUser();
    const avatarUrl = await generateAvatar(user.id, {
      bodyType: 'fullbody',
      gender: 'male', // or 'female'
    });
    return avatarUrl;
  } catch (error) {
    console.error('Error creating avatar:', error);
    throw error;
  }
}
