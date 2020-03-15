import { useLocation, useHistory } from 'react-router-dom';
export default function useNav() {
  let location = useLocation();
  let history = useHistory();

  let requestsExpanded = location.pathname.includes('/requests') && !location.pathname.includes('/new');
  const navigate = (_, link) => {
    history.push(link.key);
  }

  const keys = ['/home', '/requests', '/requests/all', '/requests/draft', '/requests/progress', '/requests/fulfilled', '/requests/new', '/reports'];
  let selectedKey = keys.reduce((selected, value) => {
    if (location.pathname.includes(value)) {
      return value;
    } else {
      return selected;
    }
  });

  return {
    requestsExpanded,
    navigate,
    selectedKey
  }
}