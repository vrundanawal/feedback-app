import { render } from "@testing-library/react";
import App from "./App";
import FeedbackData from "./data/FeedbackData";

// describe - group of related test specs => TEST SUITE

describe("AppComponent", () => {
  it("should render app comp", () => {
    expect(App).toBeTruthy();
  });

  it("should take a snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});

//test case for randomly generate uuid
jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => 1),
  };
});

// test("<FeedbackList/>", () => {
//   const handleDelete = jest.fn();
//   const item = {
//     id: 12,
//     rating: 5,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   };
//   const { getByTestId } = render(
//     <FeedbackItem item={item} handleDelete={handleDelete} />
//   );
//   const deleteBtn = getByTestId("delete-list");
//   fireEvent.click(deleteBtn);
//   // expect(handleDelete).toHaveBeenCalledTimes(1);
//   expect(handleDelete).toBeCalledWith(item.id);
// });

test("Add the feedback to list", () => {
  const addFeedBack = jest.fn();
  const feedback = [];
  const newFeedBack = {
    id: 12,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };

  render(<App addFeedback={[newFeedBack, ...feedback]} />);
  expect(addFeedBack).toHaveBeenCalledTimes(1);
});
