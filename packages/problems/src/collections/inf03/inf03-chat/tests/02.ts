import { expect, TestingError, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Krzysiek (generowanie losowej odpowiedzi)',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    const generateButton = page.locator('#przycisk-generuj');
    const chatContainer = page.locator('#chat');

    await generateButton.click();

    const allowedReplies = [
      'Świetnie!',
      'Kto gra główną rolę?',
      'Lubisz filmy Tego reżysera?',
      'Będę 10 minut wcześniej',
      'Może kupimy sobie popcorn?',
      'Ja wolę Colę',
      'Zaproszę jeszcze Grześka',
      'Tydzień temu też byłem w kinie na Diunie',
      'Ja funduję bilety',
    ];

    const lastMessage = chatContainer.locator('div').last();
    await expect(lastMessage).toHaveClass('krzysiek');
    await expect(lastMessage.locator('img')).toHaveAttribute('src', 'Krzysiek.jpg');

    const replyText = await lastMessage.locator('p').textContent();
    if (!allowedReplies.includes(replyText))
      throw new TestingError(`Odpowiedź "${replyText}" nie jest w pliku tekstyDoChatu.txt.`);
  },
};

export default test;
