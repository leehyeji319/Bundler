import PropTypes from "prop-types";

// 각 탭 form들을 import
import BundleListTab from "./BundleListForm";
import CardListTab from "./CardListForm";
import StatTab from "./StatForm";

function SelectedTab({ selected, data }) {
  // const statdata = data;
  console.log(data);
  switch (selected) {
    case "bundleTab":
      return <BundleListTab />;
    case "statTab":
      const statdata = data;
      return <StatTab data={statdata} />;
    default:
      return <CardListTab />;
  }
}

SelectedTab.propTypes = {
  selected: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectedTab;
