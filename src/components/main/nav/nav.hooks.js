import { useLocation, useHistory } from 'react-router-dom';
export default function useNav() {
  let location = useLocation();
  let history = useHistory();

  let requestsExpanded = location.pathname.includes('/requests') && !location.pathname.includes('/new');
  const navigate = (_, link) => {
    history.push(link.key);
  }

  return {
    requestsExpanded,
    navigate
  }
}