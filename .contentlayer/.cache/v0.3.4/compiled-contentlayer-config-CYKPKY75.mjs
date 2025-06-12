// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var EmailContent = defineDocumentType(() => ({
  name: "EmailContent",
  filePathPattern: `emails/content/**/*.md`,
  fields: {
    templateType: {
      type: "enum",
      options: ["welcome", "product", "newsletter", "general", "signature"],
      required: true
    },
    section: {
      type: "string",
      required: true
    },
    priority: {
      type: "number",
      default: 0
    },
    title: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("emails/content/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: ".",
  documentTypes: [EmailContent],
  onSuccess: async (importData) => {
    console.log(`\u2705 Generated ${importData.allDocuments.length} email content documents`);
  }
});
export {
  EmailContent,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CYKPKY75.mjs.map
