import FeedbackDataService from "../services/feedback.services";

describe("Testing the feedback service", () => {
  const addDoc = jest.fn();
  const newFeedback = {
    id: 2,
    rating: 9,
    text: "This is a test",
  };
  test("add the feedback to DB", () => {
    FeedbackDataService.addFeedbackDB(newFeedback);
    expect(addDoc).toHaveBeenCalledWith(1);
  });
});
// // const newFeedback = {
// //   id: 2,
// //   rating: 9,
// //   text: "This is a test",
// // };

// // test("add the feedback to db", () => {
// //   const addFeedbackDB = FeedbackDataService.addFeedbackDB(newFeedback);

// //   expect(addDoc(addFeedbackDB)).toBeCalled();
// // });

// test("plays video", () => {
//   const spy = jest.spyOn(FeedbackDataService, "addFeedbackDB");
//   const isPlaying = FeedbackDataService.addFeedbackDB();

//   expect(spy).toHaveBeenCalled();
//   expect(isPlaying).toBe(true);

//   spy.mockReset();
//   spy.mockRestore();
// });

// describe("test all services", () => {
//   test("add the feedback", () => {
//     const addDoc = jest.fn({ id: 2, rating: 9, text: "This is a test" });
//     const newFeedback = {
//       id: 2,
//       rating: 9,
//       text: "This is a test",
//     };
//     FeedbackDataService.addFeedbackDB(addDoc, newFeedback);
//     expect(addDoc).toHaveBeenCalled();
//   });

// });
