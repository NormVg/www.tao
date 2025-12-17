<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['organization', 'website', 'blogPosting', 'person'].includes(value)
  },
  data: {
    type: Object,
    required: true
  }
})

const generateSchema = () => {
  const baseUrl = 'https://www.taohq.org'

  switch (props.type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TheAlphaOnes',
        url: baseUrl,
        logo: `${baseUrl}/og.png`,
        description: 'Building the future of developer tools - AI-powered solutions, innovative CLI tools, and cutting-edge software',
        sameAs: [
          'https://twitter.com/thenormvg',
          'https://github.com/TheAlphaOnes',
          'https://discord.gg/BafRxadauZ'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'thealphaones.work@gmail.com',
          contactType: 'General Inquiries'
        }
      }

    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TheAlphaOnes',
        url: baseUrl,
        description: 'Building the future of developer tools - AI-powered solutions, innovative CLI tools, and cutting-edge software',
        publisher: {
          '@type': 'Organization',
          name: 'TheAlphaOnes'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/blog?search={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }

    case 'blogPosting':
      return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: props.data.title,
        description: props.data.excerpt,
        image: `${baseUrl}/og.png`,
        datePublished: props.data.date,
        dateModified: props.data.date,
        author: {
          '@type': 'Organization',
          name: 'TheAlphaOnes'
        },
        publisher: {
          '@type': 'Organization',
          name: 'TheAlphaOnes',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/og.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/blog/${props.data.id}`
        },
        keywords: props.data.tags?.join(', '),
        articleBody: props.data.excerpt
      }

    case 'person':
      return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: props.data.name,
        jobTitle: props.data.role,
        url: props.data.website,
        image: `${baseUrl}${props.data.image}`,
        worksFor: {
          '@type': 'Organization',
          name: 'TheAlphaOnes'
        }
      }

    default:
      return {}
  }
}

const schema = computed(() => generateSchema())

// Use Nuxt's useHead to inject JSON-LD script
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schema.value)
    }
  ]
})
</script>

<template>
  <div></div>
</template>
