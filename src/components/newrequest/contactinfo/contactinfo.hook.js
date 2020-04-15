import {useEffect} from 'react';
import {useClients} from 'services/clients';

export default function useContactInfo() {
  let clients = useClients();

  useEffect(() => {
    clients.load();
  });

  return {
    clientOptions: clients.items.map(item => ({key: item.id, text: item.name}))
  };
}