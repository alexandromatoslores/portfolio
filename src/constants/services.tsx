import DockerIcon from '@/components/icons/services/docker-icon';
import GitlabIcon from '@/components/icons/services/gitlab-icon';
import NextIcon from '@/components/icons/services/next-icon';
import NodeIcon from '@/components/icons/services/node-icon';
import PostgresqlIcon from '@/components/icons/services/postgresql-icon';
import ReactIcon from '@/components/icons/services/react-icon';
import TailwindIcon from '@/components/icons/services/tailwind-icon';
import { IAboutMeService } from '@/definitions/about-me';

export const SERVICES: IAboutMeService[] = [
  {
    title: 'my_service.services.service_1.title',
    description: 'my_service.services.service_1.description',
    icon: <ReactIcon />
  },
  {
    title: 'my_service.services.service_2.title',
    description: 'my_service.services.service_2.description',
    icon: <NodeIcon />
  },
  {
    title: 'my_service.services.service_3.title',
    description: 'my_service.services.service_3.description',
    icon: <NextIcon />
  },
  {
    title: 'my_service.services.service_4.title',
    description: 'my_service.services.service_4.description',
    icon: <PostgresqlIcon />
  },
  {
    title: 'my_service.services.service_5.title',
    description: 'my_service.services.service_5.description',
    icon: <DockerIcon />
  },
  {
    title: 'my_service.services.service_6.title',
    description: 'my_service.services.service_6.description',
    icon: <GitlabIcon />
  },
  {
    title: 'my_service.services.service_7.title',
    description: 'my_service.services.service_7.description',
    icon: <TailwindIcon />
  }
];
