// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image"
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Post",
            description: "Display this post on the homepage"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Press Release", "Media Coverage", "Industry News", "Case Study", "Insights"]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        }
      },
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "md",
        fields: [
          {
            type: "string",
            name: "clientName",
            label: "Client Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "clientPosition",
            label: "Client Position/Title",
            required: true
          },
          {
            type: "string",
            name: "company",
            label: "Company",
            required: true
          },
          {
            type: "image",
            name: "clientImage",
            label: "Client Photo"
          },
          {
            type: "image",
            name: "companyLogo",
            label: "Company Logo"
          },
          {
            type: "rich-text",
            name: "testimonial",
            label: "Testimonial",
            isBody: true,
            required: true
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Testimonial",
            description: "Display this testimonial on the homepage"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          }
        ]
      },
      {
        name: "service",
        label: "Services",
        path: "content/services",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            description: "URL-friendly version (e.g., website-content, brand-storytelling)",
            required: true
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name",
            description: "Lucide icon name (e.g., Newspaper, Users, Target, TrendingUp)"
          },
          {
            type: "string",
            name: "color",
            label: "Gradient Color",
            description: "Tailwind gradient classes (e.g., from-orange-500 to-red-500)"
          },
          {
            type: "string",
            name: "excerpt",
            label: "Short Description",
            description: "Brief description for service cards",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "whatWeDoTitle",
            label: "What We Do Section Title",
            description: 'Title for the "What We Do" section'
          },
          {
            type: "string",
            name: "whatWeDoContent",
            label: "What We Do Content",
            description: "Detailed description of the service",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "benefitsTitle",
            label: "Benefits Section Title",
            description: "Title for the benefits section"
          },
          {
            type: "string",
            name: "benefits",
            label: "Benefits List",
            description: "Key benefits of this service",
            list: true
          },
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
            description: "Call to action section title"
          },
          {
            type: "string",
            name: "ctaDescription",
            label: "CTA Description",
            description: "Call to action description text",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "ctaPrimaryText",
            label: "Primary Button Text"
          },
          {
            type: "string",
            name: "ctaPrimaryLink",
            label: "Primary Button Link"
          },
          {
            type: "string",
            name: "ctaSecondaryText",
            label: "Secondary Button Text"
          },
          {
            type: "string",
            name: "ctaSecondaryLink",
            label: "Secondary Button Link"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Service",
            description: "Display this service prominently"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Additional Content",
            description: "Extra content for the service page",
            isBody: true
          }
        ],
        ui: {
          router: ({ document }) => `/services/${document._sys.filename}`
        }
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page ID",
            isTitle: true,
            required: true,
            description: "Internal identifier (e.g., Home, About, Contact)"
          },
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title",
            description: "Main heading displayed on the page"
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            description: "Subheading or tagline"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "titleBrandText",
            label: "Title Brand Text",
            description: 'Optional brand name/text to display after page title (e.g., "Chris Austin PR" in "About Chris Austin PR")'
          },
          // Homepage specific fields
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
            description: "Homepage hero section title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            description: "Homepage hero section subtitle (the gradient text)"
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Section Title",
            description: "Call to action section heading"
          },
          {
            type: "string",
            name: "ctaDescription",
            label: "CTA Description"
          },
          {
            type: "string",
            name: "ctaButtonText",
            label: "CTA Button Text"
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label || "Stat" };
              }
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true
              },
              {
                type: "string",
                name: "value",
                label: "Value",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description"
              }
            ]
          },
          // Services Section Headers
          {
            type: "string",
            name: "servicesSectionTag",
            label: "Services Section Tag",
            description: 'Small tag above services title (e.g., "What We Do")'
          },
          {
            type: "string",
            name: "servicesSectionTitle",
            label: "Services Section Title",
            description: "Main services section heading"
          },
          {
            type: "string",
            name: "servicesSectionDescription",
            label: "Services Section Description",
            ui: {
              component: "textarea"
            }
          },
          // Services Section
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Service" };
              }
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Service Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name (e.g., Newspaper, Users, Target, TrendingUp)"
              },
              {
                type: "string",
                name: "color",
                label: "Gradient Color",
                description: "Tailwind gradient classes (e.g., from-orange-500 to-red-500)"
              }
            ]
          },
          // Process Section Headers
          {
            type: "string",
            name: "processSectionTag",
            label: "Process Section Tag",
            description: 'Small tag above process title (e.g., "Our Process")'
          },
          {
            type: "string",
            name: "processSectionTitle",
            label: "Process Section Title",
            description: "Main process section heading"
          },
          {
            type: "string",
            name: "processSectionDescription",
            label: "Process Section Description",
            ui: {
              component: "textarea"
            }
          },
          // Process Steps
          {
            type: "object",
            name: "processSteps",
            label: "Process Steps",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Step" };
              }
            },
            fields: [
              {
                type: "string",
                name: "number",
                label: "Step Number",
                description: "e.g., 01, 02, 03",
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "Step Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name (e.g., Lightbulb, Target, Rocket, TrendingUp)"
              },
              {
                type: "string",
                name: "color",
                label: "Gradient Color",
                description: "Tailwind gradient classes (e.g., from-purple-500 to-pink-500)"
              }
            ]
          },
          // Features Section Headers
          {
            type: "string",
            name: "featuresSectionTag",
            label: "Features Section Tag",
            description: 'Small tag above features title (e.g., "Why Choose Us")'
          },
          {
            type: "string",
            name: "featuresSectionTitle",
            label: "Features Section Title",
            description: "Main features section heading"
          },
          {
            type: "string",
            name: "featuresSectionDescription",
            label: "Features Section Description",
            ui: {
              component: "textarea"
            }
          },
          // Features
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Feature" };
              }
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Feature Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name (e.g., Sparkles, Target, Zap)"
              },
              {
                type: "string",
                name: "gradient",
                label: "Gradient Color",
                description: "Tailwind gradient classes (e.g., from-purple-500 to-pink-500)"
              },
              {
                type: "string",
                name: "link",
                label: "Link URL",
                description: "Where this feature card should link to (e.g., /features or /services/brand-storytelling)"
              },
              {
                type: "string",
                name: "detailedContent",
                label: "Detailed Content",
                description: "Extended description for the features page",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "benefits",
                label: "Benefits List",
                description: "Key benefits of this feature (for features page)",
                list: true
              }
            ]
          },
          // Features Section CTA
          {
            type: "string",
            name: "featuresCtaText",
            label: "Features CTA Text",
            description: "Text above the features CTA button"
          },
          {
            type: "string",
            name: "featuresButtonText",
            label: "Features Button Text",
            description: "Button text for features CTA"
          },
          // Brand Name (used in Header and Footer)
          {
            type: "string",
            name: "brandName",
            label: "Brand Name",
            description: "Company name displayed in header and footer"
          },
          // Logo Cloud Section
          {
            type: "string",
            name: "logoCloudSectionTag",
            label: "Logo Cloud Section Tag",
            description: 'Small tag above logo cloud title (e.g., "Trusted Partners")'
          },
          {
            type: "string",
            name: "logoCloudSectionTitle",
            label: "Logo Cloud Section Title"
          },
          {
            type: "string",
            name: "logoCloudSectionDescription",
            label: "Logo Cloud Section Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "logoCloudClients",
            label: "Client Logos",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "Client" };
              }
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Client Name",
                required: true
              },
              {
                type: "string",
                name: "industry",
                label: "Industry",
                required: true
              }
            ]
          },
          {
            type: "string",
            name: "logoCloudCtaText",
            label: "Logo Cloud CTA Text",
            description: "Text above the CTA button"
          },
          {
            type: "string",
            name: "logoCloudButtonText",
            label: "Logo Cloud Button Text",
            description: "Button text for logo cloud CTA"
          },
          // Testimonials Section Headers
          {
            type: "string",
            name: "testimonialsSectionTag",
            label: "Testimonials Section Tag",
            description: "Small tag above testimonials title"
          },
          {
            type: "string",
            name: "testimonialsSectionTitle",
            label: "Testimonials Section Title"
          },
          {
            type: "string",
            name: "testimonialsSectionDescription",
            label: "Testimonials Section Description",
            ui: {
              component: "textarea"
            }
          },
          // Stats Section Bottom Text
          {
            type: "string",
            name: "statsBottomText",
            label: "Stats Section Bottom Text",
            description: "Text displayed at the bottom of stats section"
          },
          // About page fields
          {
            type: "string",
            name: "aboutTitle",
            label: "About Section Title"
          },
          {
            type: "string",
            name: "aboutDescription",
            label: "About Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "story",
            label: "Our Story",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "mission",
            label: "Mission Statement",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "values",
            label: "Company Values",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Value" };
              }
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Value Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name (e.g., heart, award, zap)"
              }
            ]
          },
          {
            type: "object",
            name: "team",
            label: "Team Members",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "Team Member" };
              }
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true
              },
              {
                type: "string",
                name: "position",
                label: "Position",
                required: true
              },
              {
                type: "string",
                name: "bio",
                label: "Bio",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Photo"
              }
            ]
          },
          // Contact page fields
          {
            type: "string",
            name: "contactSectionTitle",
            label: "Contact Section Title",
            description: "Main heading for contact information section"
          },
          {
            type: "string",
            name: "contactSectionDescription",
            label: "Contact Section Description",
            description: "Description text below the contact section title",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "email",
            label: "Contact Email"
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number"
          },
          {
            type: "string",
            name: "address",
            label: "Office Address",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "officeHours",
            label: "Office Hours"
          },
          {
            type: "object",
            name: "socialMedia",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "twitter",
                label: "Twitter Handle"
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL"
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram Handle"
              }
            ]
          },
          // Footer fields
          {
            type: "string",
            name: "footerBrandName",
            label: "Footer Brand Name",
            description: "Company name displayed in footer"
          },
          {
            type: "string",
            name: "footerTagline",
            label: "Footer Tagline",
            description: "Short description in footer",
            ui: {
              component: "textarea"
            }
          },
          // Process Page Fields
          {
            type: "string",
            name: "timelineTitle",
            label: "Timeline Title",
            description: "Title for the timeline visualization section (Process page)"
          },
          {
            type: "string",
            name: "timelineDescription",
            label: "Timeline Description",
            description: "Description for the timeline section (Process page)"
          },
          {
            type: "string",
            name: "ctaPrimaryText",
            label: "CTA Primary Button Text",
            description: "Text for primary CTA button (Process page)"
          },
          {
            type: "string",
            name: "ctaPrimaryLink",
            label: "CTA Primary Button Link",
            description: "Link for primary CTA button (Process page)"
          },
          {
            type: "string",
            name: "ctaSecondaryText",
            label: "CTA Secondary Button Text",
            description: "Text for secondary CTA button (Process page)"
          },
          {
            type: "string",
            name: "ctaSecondaryLink",
            label: "CTA Secondary Button Link",
            description: "Link for secondary CTA button (Process page)"
          },
          {
            type: "object",
            name: "steps",
            label: "Process Steps (Detailed)",
            description: "Detailed process steps for the process page",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Step" };
              }
            },
            fields: [
              {
                type: "string",
                name: "number",
                label: "Step Number",
                description: "e.g., 01, 02, 03",
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "Step Title",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name (e.g., Lightbulb, Target, Rocket, TrendingUp)"
              },
              {
                type: "string",
                name: "color",
                label: "Gradient Color",
                description: "Tailwind gradient classes (e.g., from-purple-500 to-pink-500)"
              },
              {
                type: "string",
                name: "keyActivities",
                label: "Key Activities",
                description: "List of key activities (one per line)",
                list: true
              }
            ]
          },
          // Blog Post CTA Fields
          {
            type: "string",
            name: "blogCtaTitle",
            label: "Blog CTA Title",
            description: "Title for CTA section on blog post pages"
          },
          {
            type: "string",
            name: "blogCtaDescription",
            label: "Blog CTA Description",
            description: "Description for CTA section on blog post pages",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "blogCtaPrimaryText",
            label: "Blog CTA Primary Button Text",
            description: "Text for primary button on blog post CTA"
          },
          {
            type: "string",
            name: "blogCtaPrimaryLink",
            label: "Blog CTA Primary Button Link",
            description: "Link for primary button on blog post CTA"
          },
          {
            type: "string",
            name: "blogCtaSecondaryText",
            label: "Blog CTA Secondary Button Text",
            description: "Text for secondary button on blog post CTA"
          },
          {
            type: "string",
            name: "blogCtaSecondaryLink",
            label: "Blog CTA Secondary Button Link",
            description: "Link for secondary button on blog post CTA"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Additional Content",
            isBody: true
          }
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") return "/";
            return `/${document._sys.filename}`;
          }
        }
      }
    ]
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_INDEXER_TOKEN,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});
export {
  config_default as default
};
