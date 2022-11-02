import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackData from "../data/FeedbackData";
import FeedbackItem from "./FeedbackItem";
import { shallow } from "enzyme";

//import userEvent from "@testing-library/user-event";

describe("<FeedbackItem/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackItem).toBeTruthy();
  });

  it("should have delete button", () => {
    // const deleteBtn = screen.getByTestId("delete-list");
    // expect(deleteBtn).toBeInTheDocument();
    render(<FeedbackItem item={FeedbackData[0]} />);
    const deleteBtn = screen.getByTestId("delete-list");
    expect(deleteBtn).toBeInTheDocument();
    //expect(screen.queryByTestId("delete-list")).not.toBeInTheDocument();
  });
});

test("should test feedbackItem component", () => {
  const wrapper = shallow(<FeedbackItem item={FeedbackData[0]} />);
  expect(wrapper).toMatchSnapshot();
});

//It should remove the item from the list
test("<FeedbackList/>", () => {
  const handleDelete = jest.fn();
  const item = {
    id: 12,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
  const { getByTestId } = render(<FeedbackItem item={item} />);
  const deleteBtn = getByTestId("delete-list");
  fireEvent.click(deleteBtn);
  // expect(handleDelete).toHaveBeenCalledTimes(1);
  expect(handleDelete).toBeCalledWith(item.id);
});
