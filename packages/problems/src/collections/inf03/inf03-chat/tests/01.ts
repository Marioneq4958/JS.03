import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Jolka (wysyłanie wiadomości)',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const messageInput = page.locator('#tresc');
    const sendButton = page.locator('#przycisk-wyslij');
    const chatContainer = page.locator('#chat');

    await messageInput.fill('Hello world!');
    await sendButton.click();

    const lastMessage = chatContainer.locator('div').last();
    await expect(lastMessage).toHaveClass('jolka');
    await expect(lastMessage.locator('p')).toHaveText('Hello world!');
    await expect(lastMessage.locator('img')).toHaveAttribute('src', 'Jolka.jpg');
  },
};

export default test;
