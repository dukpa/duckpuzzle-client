import { useEffect } from 'react';

import {useRequests} from 'services/request';

export default function useNewRequest() {
  let requests = useRequests();

  useEffect(() => {
    if (!requests.current && !requests.creating) {
      requests.new();
    }
  });

  return {
    loading: requests.creating,
    request: requests.current || {}
  };
}