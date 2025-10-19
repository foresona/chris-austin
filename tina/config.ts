import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'content/blog',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'image',
            name: 'coverImage',
            label: 'Cover Image',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured Post',
            description: 'Display this post on the homepage',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: ['Press Release', 'Media Coverage', 'Industry News', 'Case Study', 'Insights'],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        name: 'testimonial',
        label: 'Testimonials',
        path: 'content/testimonials',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'clientName',
            label: 'Client Name',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'clientPosition',
            label: 'Client Position/Title',
            required: true,
          },
          {
            type: 'string',
            name: 'company',
            label: 'Company',
            required: true,
          },
          {
            type: 'image',
            name: 'clientImage',
            label: 'Client Photo',
          },
          {
            type: 'image',
            name: 'companyLogo',
            label: 'Company Logo',
          },
          {
            type: 'rich-text',
            name: 'testimonial',
            label: 'Testimonial',
            isBody: true,
            required: true,
          },
          {
            type: 'number',
            name: 'rating',
            label: 'Rating (1-5)',
            required: true,
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured Testimonial',
            description: 'Display this testimonial on the homepage',
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page ID',
            isTitle: true,
            required: true,
            description: 'Internal identifier (e.g., Home, About, Contact)',
          },
          {
            type: 'string',
            name: 'pageTitle',
            label: 'Page Title',
            description: 'Main heading displayed on the page',
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            description: 'Subheading or tagline',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          // Homepage specific fields
          {
            type: 'string',
            name: 'heroTitle',
            label: 'Hero Title',
            description: 'Homepage hero section title',
          },
          {
            type: 'string',
            name: 'heroSubtitle',
            label: 'Hero Subtitle',
            description: 'Homepage hero section subtitle (the gradient text)',
          },
          {
            type: 'string',
            name: 'heroDescription',
            label: 'Hero Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'ctaTitle',
            label: 'CTA Section Title',
            description: 'Call to action section heading',
          },
          {
            type: 'string',
            name: 'ctaDescription',
            label: 'CTA Description',
          },
          {
            type: 'string',
            name: 'ctaButtonText',
            label: 'CTA Button Text',
          },
          {
            type: 'object',
            name: 'stats',
            label: 'Statistics',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label || 'Stat' }
              },
            },
            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Label',
                required: true,
              },
              {
                type: 'string',
                name: 'value',
                label: 'Value',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
            ],
          },
          // About page fields
          {
            type: 'string',
            name: 'aboutTitle',
            label: 'About Section Title',
          },
          {
            type: 'string',
            name: 'aboutDescription',
            label: 'About Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'story',
            label: 'Our Story',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'mission',
            label: 'Mission Statement',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'values',
            label: 'Company Values',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || 'Value' }
              },
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Value Title',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                required: true,
              },
              {
                type: 'string',
                name: 'icon',
                label: 'Icon Name',
                description: 'Lucide icon name (e.g., heart, award, zap)',
              },
            ],
          },
          {
            type: 'object',
            name: 'team',
            label: 'Team Members',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || 'Team Member' }
              },
            },
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Name',
                required: true,
              },
              {
                type: 'string',
                name: 'position',
                label: 'Position',
                required: true,
              },
              {
                type: 'string',
                name: 'bio',
                label: 'Bio',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'image',
                name: 'image',
                label: 'Photo',
              },
            ],
          },
          // Contact page fields
          {
            type: 'string',
            name: 'email',
            label: 'Contact Email',
          },
          {
            type: 'string',
            name: 'phone',
            label: 'Phone Number',
          },
          {
            type: 'string',
            name: 'address',
            label: 'Office Address',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'officeHours',
            label: 'Office Hours',
          },
          {
            type: 'object',
            name: 'socialMedia',
            label: 'Social Media',
            fields: [
              {
                type: 'string',
                name: 'twitter',
                label: 'Twitter Handle',
              },
              {
                type: 'string',
                name: 'linkedin',
                label: 'LinkedIn URL',
              },
              {
                type: 'string',
                name: 'instagram',
                label: 'Instagram Handle',
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Additional Content',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'home') return '/'
            return `/${document._sys.filename}`
          },
        },
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_INDEXER_TOKEN!,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
})
