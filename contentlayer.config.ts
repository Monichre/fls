import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const EmailContent = defineDocumentType(() => ({
  name: 'EmailContent',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    templateType: { 
      type: 'enum', 
      options: ['welcome', 'product', 'newsletter', 'general', 'signature'], 
      required: true 
    },
    section: { 
      type: 'string', 
      required: true 
    },
    priority: { 
      type: 'number', 
      default: 0 
    },
    title: {
      type: 'string',
      required: false
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('emails/content/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'emails/content',
  documentTypes: [EmailContent],
  disableImportAliasWarning: true,
  onSuccess: async (importData) => {
    const emailContentDocs = importData?.allDocuments || []
    console.log(`✅ Generated ${emailContentDocs.length} email content documents`)
  },
})