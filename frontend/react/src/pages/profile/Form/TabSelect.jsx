import PropTypes from "prop-types";

// 각 탭 form들을 import
import BundleListTab from "./BundleListForm";
import CardListTab from "./CardListForm";
import StatTab from "./StatForm";

function SelectedTab({ selected, data1, data2, data3 }) {
  switch (selected) {
    case "bundleTab":
      return <BundleListTab data={data2} />;
    case "statTab":
      // const statdata = data;
      return <StatTab data={data3} />;
    default:
      return <CardListTab data={data1} />;
  }
}

SelectedTab.propTypes = {
  selected: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
  data1: PropTypes.arrayOf(PropTypes.object).isRequired,
  data2: PropTypes.arrayOf(PropTypes.object).isRequired,
  data3: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectedTab;
