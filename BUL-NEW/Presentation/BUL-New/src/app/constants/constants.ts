import { AccountSearch } from '../interfaces/account-search';
import { DomainSearch } from '../interfaces/domain-search';
import { PasswordSearch } from '../interfaces/password-search';
import { PasteSearch } from '../interfaces/paste-search';

export const accountData: AccountSearch[] = [
  {
    search: 'hello123',
    results: 651126,
    response: 'Account is not secure',
  },
  {
    search: 'qwerty1234',
    results: 984951,
    response: 'Account is not secure',
  },
  {
    search: 'password1',
    results: 546541,
    response: 'Account is not secure',
  },
  {
    search: 'noob12345',
    results: 951965,
    response: 'Account is not secure',
  },
  {
    search: '1jA8G1hk',
    results: 0,
    response: 'Account is secure',
  },
];

export const domainData: DomainSearch[] = [
  {
    search: 'Hydrogen',
    results: 1,
    response: 'Domain is secure',
  },
  {
    search: 'Helium',
    results: 4,
    response: 'Domain is secure',
  },
  {
    search: 'Pastebin',
    results: 6518594,
    response: 'Domain is not secure',
  },
  {
    search: 'Beryllium',
    results: 9,
    response: 'Domain is secure',
  },
  {
    search: 'Boron',
    results: 10,
    response: 'Domain is secure',
  },
];

export const passwordData: PasswordSearch[] = [
  {
    search: 'Hydrogen',
    results: 654195,
    response: 'Password is not secure',
  },
  {
    search: 'Helium',
    results: 23156,
    response: 'Password is not secure',
  },
  {
    search: 'Lithium',
    results: 1781952,
    response: 'Password is not secure',
  },
  {
    search: 'Beryllium',
    results: 321321,
    response: 'Password is not secure',
  },
  {
    search: 'Boron',
    results: 14954,
    response: 'Password is not secure',
  },
];

export const pasteData: PasteSearch[] = [
  {
    search: 'PasteCheck',
    results: 17677,
    response: 'PasteCheck has been pasted a shit load of times',
  },
  {
    search: 'PasteBin',
    results: 4877,
    response: 'PasteCheck has been pasted thousands of times',
  },
  {
    search: 'NoobPaste',
    results: 61,
    response: 'PasteCheck has been pasted a few times',
  },
  {
    search: 'PasteMe',
    results: 922,
    response: 'PasteCheck has been pasted many times',
  },
  {
    search: 'HelloPaste',
    results: 104,
    response: 'PasteCheck has been pasted many times',
  },
];
