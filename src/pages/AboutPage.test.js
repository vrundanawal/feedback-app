import { shallow } from "enzyme";
import AboutPage from "./AboutPage";

test("should test feedback form component", () => {
  const wrapper = shallow(<AboutPage />);
  expect(wrapper).toMatchSnapshot();
});
