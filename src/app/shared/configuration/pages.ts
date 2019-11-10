export interface NavLinkInfo {
  name: string;
  location: string;
}

export const ROLE_DEVELOPER = 'DEVELOPER';
export const ROLE_MANAGER = 'MANAGER';
export const ROLE_ADMIN = 'ADMIN';

export const PAGE_REPORT = 'REPORT';
export const PAGE_PAST_REPORTS = 'PAST_REPORTS';
export const PAGE_CLIENTS = 'CLIENTS';
export const PAGE_MANAGER_REPORTS = 'MANAGER_REPORTS';

export const NAV_LINKS: { [key: string]: NavLinkInfo } = {
  [PAGE_REPORT]: {
      name: 'Ежедневный отчет', location: '/report'
  },
  [PAGE_PAST_REPORTS]: {
      name: 'Прошлые отчеты', location: '/pastReports'
  },
  [PAGE_CLIENTS]: {
      name: 'Клиенты', location: '/clients'
  },

};

export const NAV_SECTIONS: { [key: string]: Array<string> } = {
  [ROLE_DEVELOPER]: [PAGE_REPORT, PAGE_PAST_REPORTS],
  [ROLE_MANAGER]: [PAGE_MANAGER_REPORTS],
  [ROLE_ADMIN]: [PAGE_REPORT, PAGE_CLIENTS]
};
