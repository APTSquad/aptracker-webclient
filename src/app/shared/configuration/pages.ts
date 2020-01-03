export interface NavLinkInfo {
  name: string;
  location: string;
}
export const ROLE_UNAUTHORIZED = 'GUEST';
export const ROLE_DEVELOPER = 'DEVELOPER';
export const ROLE_MANAGER = 'MANAGER';
export const ROLE_ADMIN = 'ADMIN';

export const PAGE_REPORT = 'REPORT';
export const PAGE_PAST_REPORTS = 'PAST_REPORTS';
export const PAGE_USERS = 'USERS';
export const PAGE_HIERARCHY = 'HIERARCHY';
export const PAGE_MANAGER_REPORTS = 'MANAGER_REPORTS';
export const PAGE_BAGS = 'BAGS';
export const PAGE_BAG_REPORT = 'BAG_REPORT';

export const NAV_LINKS: { [key: string]: NavLinkInfo } = {
  [PAGE_REPORT]: {
    name: 'Ежедневный отчет', location: '/report'
  },
  [PAGE_PAST_REPORTS]: {
    name: 'Прошлые отчеты', location: '/pastReports'
  },
  [PAGE_HIERARCHY]: {
    name: 'Иерархия', location: '/hierarchy'
  },
  [PAGE_USERS]: {
    name: 'Пользователи', location: '/users'
  },
  [PAGE_BAGS]: {
    name: 'Портфели', location: '/bags'
  },
  [PAGE_BAG_REPORT]: {
    name: 'Отчет по портфелю', location: '/bag-report'
  },

};

export const NAV_SECTIONS: { [key: string]: Array<string> } = {
  [ROLE_DEVELOPER]: [PAGE_REPORT, PAGE_PAST_REPORTS, PAGE_USERS],
  [ROLE_MANAGER]: [PAGE_MANAGER_REPORTS],
  [ROLE_ADMIN]: [PAGE_REPORT, PAGE_HIERARCHY, PAGE_USERS, PAGE_BAGS, PAGE_BAG_REPORT],
  [ROLE_UNAUTHORIZED]: []
};
