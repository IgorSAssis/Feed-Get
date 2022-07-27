import { IndexFeedbackUseCase } from "./index-feedback-use-case";

import { FeedbackIndexData } from "../repositories/feedbacks-repository"

const createFeedbackSpy = jest.fn();
const indexFeedbackSpy = jest.fn(() => {
  return new Promise<{ feedbacks: Array<FeedbackIndexData> }>((resolve, reject) => {
    resolve({
      feedbacks: []
    })
  });
    
});

const indexFeedbacks = new IndexFeedbackUseCase({
  index: indexFeedbackSpy,
  create: createFeedbackSpy,
});

describe("Index feedback", () => {
  it("should return a list of feedbacks", async () => {
    await indexFeedbacks.execute();

    expect(indexFeedbackSpy).toHaveBeenCalled();
  });
});
