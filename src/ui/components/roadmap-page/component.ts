import Component from "@glimmer/component";

type Feature = {
  name: string,
  description: string,
  icon: string,
  status: string,
  availability: string,
  resources: ResourceLink[],
  champions: Member[]
};

type Member = {
  name: string,
  image: string
  url: string
};

interface ResourceLink {
  type: string,
  name: string,
  url: string
}

// Might want to set specific alternative text for icons and images
// type Image = {
//   src: string,
//   alt: string
// };

export default class RoadmapPage extends Component {
  features: Feature[] = [
    {
      name: 'Service Worker',
      description: 'Service Workers allow you to register a script that runs in the background, allowing your app to unlock capabilities like push notifications, background sync, and more.',
      icon: 'http://placehold.it/50x50',
      status: 'Under Consideration',
      availability: null,
      resources: null,
      champions: null
    },
    {
      name: 'Glimmer Components',
      description: 'A ground-up rethink of what modern UI components should be, leveraging the lastest JavaScript features, incremental computation, unidirectional data flow and the declarative power of HTML.',
      icon: 'http://placehold.it/50x50',
      status: 'In Development',
      availability: null,
      resources: null,
      champions: null
    },
    {
      name: 'Svelte Templates',
      description: 'Leveraging the Glimmer VM bytecode format, this feature reduces the over-the-wire cost of template files by up to 80%',
      icon: 'http://placehold.it/50x50',
      status: 'Shipped',
      availability: 'Available in Ember.js 2.10 and up.',
      resources: [
        {
          type: 'rfc',
          name: 'Glimmer Template Compiler',
          url: '#github-somewherelse'
        },
        {
          type: 'pull-request',
          name: '#172: Implement awesome feature',
          url: '#github-somewhere'
        }
      ],
      champions: [
        {
          name: 'Godfrey Chan',
          image: 'http://placehold.it/30x30?text=GC',
          url: '#'
        },
        {
          name: 'Yehuda Katz',
          image: 'http://placehold.it/30x30?text=YK',
          url: '#'
        }
      ]
    }
  ]
}