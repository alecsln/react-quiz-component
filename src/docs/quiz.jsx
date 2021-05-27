const segment = {
  basic: "basic",
  medium: "medium",
  advanced: "advanced",
};

export const quiz = {
  "quizTitle": "EpiServer Commerce",
  "quizSynopsis": "for training",
  "questions": [
    {
      "question": "Where can you find versions for Episerver Commerce (or addons) in order to apply them to an existing site?",
      "answers": [
        "The Episerver NuGet feed",
        "Episerver Support ",
        "The Episerver Add-On feed",
        "Episerver World"
      ],
      "correctAnswer": [1],
    },
    {
      "question": "You are adding Commerce to your on-premises load balanced Episerver Solution. Is there something you need to do regarding licensing?",
      "answers": [
        "Yes, add an updated master slave license.config to all the sites.",
        "Yes, copy the existing license.config to the Commerce Manager site folder.",
        "Yes, got an updated production license.config including Commerce",
        "No, update of license.config is not needed"
      ],
      "correctAnswer": [3],
      "explanation": "nếu hiểu câu hỏi là add thêm Commerce vào, site EpiCMS có sẵn thì C là đúng và license cũ là dành cho CMS",
    },
    {
      "question": "Which method result is not cached by Episerver Commerce?",
      "answers": [
        "IPriceDetailService.List(..) ",
        "((VariationContentCurrentData).GetStockPlacement()",
        "CatalogEntryManager.GetCatalogEntryDto(int catalogEngtryld, CatalogEntryResponseGroup responseGroup) ",
        "IInventoryService List(...)"
      ],
      "correctAnswer": [2],
    },
    {
      "question": "Which default implementation of following interfaces has a cache?",
      "fixed": true,
      "answers": [
        "IPriceService",
        "PriceDetailService",
        "Both of above ",
        "None of above"
      ],
      "correctAnswer": [3],
      "explanation": "In Mediachase.Commerce.dll before (13.26.0) the implement of IPriceDetailService may not has a cache"
    },
    {
      "question": "As you browse through the catalog you notice that a lot of memory is used, and that memory is being steadily increased as you browse through products. Which file contains commerce specific cache settings that could help resolve this issue?",
      "answers": [
        "baf.data.manager.config",
        "ecf.app.config",
        "ecf.catalog.config",
        "web.config"
      ],
      "correctAnswer": [3],
      "explanation": "chỉ có ecf.app.config và ecf.catalog.config là có cấu hình cache. Nhưng câu hỏi về catalog nên chỉnh ở trong config catalog"
    },
    {
      "question": "What should you do to increase the default cache time for CatalogNode objects to one day?",
      "answers": [
        " In the ecf.catalog.config file, set the Cache element's node Timeout attribute value to \"1,0:0:0\"",
        "CatalogNodeManager.CatalogNode Timeout - TimeSpan.FromDays(1);",
        "Configure the log container to change the cache TimeSpan it passes to the CatalogNodeManager class's constructor.",
        "In the ecf.app.config file. Set the Cache element's node Timeout attribute value."
      ],
      "correctAnswer": [1],
    },
    {
      "question": "In which file can search providers for the catalog be configured for the document-based search engine?",
      "answers": [
        "Mediachase.Search.Filters.config",
        "ecf.catalog.config",
        "Web.config",
        "Mediachase.Search.config"
      ],
      "correctAnswer": [4],
      "explanation": "only mediachase.search.config have it, mediachase.search.filters.config only configure filters"
    },
    {
      "question": "To deploy your custom index builder with Episerver Commerce search provider model you need to do one of the following alternatives to define your customization Search Documents (choose one approach)?",
      "answers": [
        "The content model will be used in your custom index builder and configuration of the custom index builder is defined in an initialization module",
        "The content model will be used in your custom Index builder and configuration of the custom index builder is defined in an XML file",
        "The CatalogEntryDto will be used in your custom index builder and configuration of the custom index builder is defined in an XML file",
        "The CatalogEntryDto will be used in your custom index builder and configuration of the custom index builder is defined by using ICatalogSystem"
      ],
      "correctAnswer": [3],
      "explanation": "CatalogEntryDto; XML"
    },
    {
      "question": "Using the built-in search provider model, you want to add a field to catalog entries containing additional keywords that should be used to match search queries. Where should you configure the field for it to be included in the search index?",
      "answers": [
        "Mediachase Search Filters.config",
        "Meta class configuration",
        "Meta field configuration",
        "Mediachase.Search.config",
        "Attribute on the content type"
      ],
      "correctAnswer": [3, 5],
      "explanation": "-Meta field configuration- (Possible but you should use attribute, incase of option -Attribute on the content type- is not exist) \r\n -Attribute on the content type- (prefer than option -Meta field configuration-) \r\n we can set a field to be [searchable] in MetaField config",
    },
    {
      "question": "You want to add a field to catalog entries containing additional keywords that should be used to match search queries. Where should you configure the field for it to be included in the search index?",
      "answers": [
        "Mediachase.Search.filters.config",
        "Meta class configuration.",
        "Metafield configuration",
        "Mediachase.Search.config"
      ],
      "correctAnswer": [3],
      "explanation": "",
    },
    {
      "question": "Which of the following would not be correct regarding facets with the provider model?",
      "answers": [
        "Several metafields can be linked a single facet group",
        "Each facet group should only have one type of facet",
        "A facet is filter",
        "Facets are loaded with the Search Manager class",
        "The facets configured in the Medicalchase Search Filters.config populate the facet property of the ISearch Criteria interface",
        "The facets configured can populate the Catalog EntrySearch Criteria manually in code or automatically",
        "From the search result you can load catalog items by both the content model and CatalogEntryDto rows"
      ],
      "correctAnswer": [1, 7],
      "explanation": "",
    },
    {
      "question": "You are upgrading your Commerce website to Commerce 13, what do you need to do to make sure your database schema is updated?",
      "fixed": true,
      "answers": [
        "Nothing, it's done automatically by default",
        "By executing update-epidatabase in Package console manager",
        "By adding update DatabaseSchema=\"true\" to episerver.framework section in web.config",
        "Both B and C are needed",
        "Either B or C is needed, but not both"
      ],
      "correctAnswer": [5],
      "explanation": "",
    },
    {
      "question": "You are upgrading your commerce site to the latest version. Which statements are true?",
      "answers": [
        "The new versions can be found on EpiServer Nuget feed",
        "The new versions are available on https://www.nuget.org/",
        "Database migration steps for data will by default execute automatically",
        "Add attribute updateDatabaseSchema=\"true\" to the episerver.framework element in configuration to enable automatic schema updates",
        "You can run a built-in scheduled job to convert old promotions to work with the new promotion system"
      ],
      "correctAnswer": [1, 4],
      "explanation": "",
    },
    {
      "question": "Which two of the following option will facilitate scaling?",
      "answers": [
        "Avoid retrieving data external to the web server unless absolutely required.",
        "Avoid processing data in memory and off-load it to the database server instead.",
        "Use Ling when querying data.",
        "Ensure that the web server has a large secondary storage.",
        "Ensure that even “real time” data is cached, if only for a moment."
      ],
      "correctAnswer": [1, 5],
      "explanation": "",
    },
    {
      "question": "Which tool cannot be used to evaluate a solution for its scalability and performance?",
      "answers": [
        "Internet Information Services Manager's Performance feature.",
        "Microsoft Performance Monitor. (of Windows)",
        "SQL Server Profiler. ",
        "Visual Studio Profiler."
      ],
      "correctAnswer": [1],
      "explanation": "",
    },
    {
      "question": "Which option cannot be implemented to increase the performance of a Commerce site?",
      "answers": [
        "Indefinite client-side caching of static resources",
        "Set up two or more web servers",
        "Set up a third-party CDN for off-loading traffic",
        "Set up two or more Microsoft SQL servers in an Active-Active cluster"
      ],
      "correctAnswer": [1],
      "explanation": "",
    },
    {
      "question": "Which option cannot be implemented to increase the performance of a Commerce site?",
      "answers": [
        "Indefinite client-side caching of static resources.",
        "Set up two or more web servers.",
        "Load items individually instead of in batches when rendering entry listing pages.",
        "Set up a third-party CDN for off-loading traffic.",
        "A Microsoft SQL Always On availability group for both read and write operations."
      ],
      "correctAnswer": [3],
      "explanation": "",
    },
    {
      "question": "Your Commerce website has run for a long time and is slower than after initial deployment. What can be done to improve performance?",
      "answers": [
        "Keep your website up to date with the latest versions of Commerce",
        "Shrink your database with DBCC SHRINKDATABASE command.",
        "Execute the Maintain Database Indexes scheduled job.",
        "Reimport your catalog with overwrite = true."
      ],
      "correctAnswer": [3],
      "explanation": "",
    },
    {
      "question": "Which code line in the product page would be the most likely to cause bad performance on the site when your product page is slow to load?",
      "answers": [
        "CatalogContext.MetaDataContext.UseCurrentThreadCulture = false;",
        "urlResolver.GetUrl(...)",
        "MetaDataContext metaContext = CatalogContext.MetaDataContext;",
        "myContentLoader.GetDescendents(...);"
      ],
      "correctAnswer": [4],
      "explanation": "",
    },
    {
      "question": "Which of the following alternatives is the recommended way to use the content model to get all immediate instances (first level) of Product content types from a category?",
      "answers": [
        "IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>(); \r\n IEnumerable<ContentReference> contentList = contentLoader.GetDescendants(CurrentContent.ContentLink);",
        "IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>(); \r\n	Var contentList = contentLoader.GetChildren<ProductContent>(CurrentContent.ContentLink);",
        "IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>() \r\nVar contentList = contentLoader.GetChildren<EntryContentBase>(CurrentContent.ContentLink)",
        "CatalogContentLoader catalogContentLoader = ServiceLocator.Current.GetInstance<ICatalogContentLoader>(); catalogContentLoader.GetCatalogEntries(ContentLink);"
      ],
      "correctAnswer": [2],
      "explanation": "ProductContent",
    },
    {
      "question": "A fastener store sells nails screws. Each nail or screw has a material (such as zinc or copper), a purpose (such as wood or sheet metal) and a size. There are one million total sellable items in the catalog. Which catalog layout will provide the most efficient catalog performance?",
      "answers": [
        "A \"Nail\" category and a \"Screw\" category containing SKUs for each individual sellable item using associations to link them to groups of material.",
        "A \"Nail\" product and a \"Screw\" product related to SKUs for each individual sellable item.",
        "A \"Nail\" category and a \"Screw\" category related to SKUs for each individual sellable item",
        "A single category containing SKUs for each item without complex category organization.",
        "A hierarchy type (nails and screws), material and purpose category containing products, each related to SKUs for each size of the product."
      ],
      "correctAnswer": [5],
      "explanation": "hierarchy",
    },
    {
      "question": "Which code line in the product page would be the most likely to cause bad performance on the site when your product page is slow to load?",
      "answers": [
        "CatalogContext.MetaDataContext.UseCurrentThreadCulture = false",
        "newEntryRow.ListPrice = Convert.ToDecimal(1000.00)",
        "MetaDataContext metaContext = CatalogContext.MetaDataContext",
        "newEntryRow.SetSerizalizedDataNull()"
      ],
      "correctAnswer": [4],
      "explanation": "SetSerizalizedDataNull",
    },
    {
      "question": "You are creating a class with many methods that bind tightly to the catalog API. With performance and testability in mind, how should you write your code?",
      "answers": [
        "Call ServiceLocator.Current.GetInstance<ICatalogSystem>() in each method that needs to access ICatalogSystem.",
        "Call methods of the ICatalogSystem directly in each of your methods. Call CatalogContext.Current directly in each method that needs to access ICatalogSystem",
        "Write a constructor that accepts an ICatalogSystem instance and store it in a field to use for later calls.",
        "Add a property that accepts an ICatalogSystem instance and store it in a field to use for later calls. Assign an instance of CatalogContext... to the property."
      ],
      "correctAnswer": [3],
      "explanation": "constructor; ICatalogSystem; call later",
    },
    {
      "question": "When working with Inversion of Control (IoC) in Episerver Commerce, how would you preferable manage your dependencies? Order the alternative with the most preferable option first.",
      "answers": [
        "Use the Inject<X> construct",
        "Use constructor based injection",
        "Use new X() to create your dependencies",
        "Use ServiceLocator.CurrentGetInstance<X>()"
      ],
      "correctAnswer": [2, 1, 4, 3],
      "explanation": "constructor -> inject -> servicelocator -> new",
    },
    {
      "question": "What should you implement to create an initialization module to modify the IoC container?",
      "answers": [
        "InitializableModule",
        "InitializableHttpModule",
        "IConfigurableModule",
        "IHttpModule"
      ],
      "correctAnswer": [3],
      "explanation": "IConfigurableModule inherits InitializableModule",
    },
    {
      "question": "You need to replace the default implementation of IPriceService (or any Episerver Service). Which statement is true?",
      "fixed": true,
      "answers": [
        "You create your custom implementation and register it with the ServiceConfiguration attribute.",
        "You create your custom implementation and register it within an IConfigurableModule, which has a ModuleDependency on Commercelnitialization",
        "Both answer A and answer B are correct, either of them can be used depending on your preferences."
      ],
      "correctAnswer": [3],
      "explanation": "",
    },
    {
      "question": "For on premise installations the Event System is used to share information about changed data on multiple servers. What is the default communication mechanism used to achieve this?",
      "answers": [
        "SQL Server Event notifications. ",
        "Multicast UDP datagrams.",
        "Event delegates.",
        "Service Bus queues."
      ],
      "correctAnswer": [2],
      "explanation": "",
    },
    {
      "question": "You are developing an on-premise site with separated editor and front-end servers. The editor servers are being moved to a different network where a firewall limits connectivity. What is needed for remote events to continue working?",
      "answers": [
        "Nothing as long as all nodes can still access the databases.",
        "Change to Unicast or Directed Broadcast in the WCF configuration.",
        "Disable the Windows Firewall. ",
        "Ensure that all servers can communicate with the Service Bus server."
      ],
      "correctAnswer": [2],
      "explanation": "",
    },
    {
      "question": "Which statement is true regarding catalog structures?",
      "answers": [
        "Categories are needed to be able to use Context classes for retrieving product data",
        "Assets can only be attached on models that inherit from EntryContentBase",
        "Assets can only be attached on SKU or variation level",
        "Display templates (A renderer) can make use of categories when creating catalog browsing features",
        "It is not possible to have SKUs without products in a catalog structure",
        "The depth is limited to product-> variation. You cannot have, for example, \"ProductLine\" a \"Color\" -> \"Size\" that builds three levels."
      ],
      "correctAnswer": [4],
      "explanation": "Display templates",
    },
    {
      "question": "Which two of the following represent why it is important to plan the catalog structure before creating metadata?",
      "answers": [
        "In order to be able to place an item in the cart",
        "The structure of the catalog could affect front-end performance",
        "To ensure the display of relevant product information for the customers",
        "To track changes to values for individual meta fields on the entry",
        "To know which media assets to use"
      ],
      "correctAnswer": [2, 3],
      "explanation": "",
    },
    {
      "question": "Which two of the following represent why it is important to plan for the structure of a catalog?",
      "answers": [
        "In order to be able to place an item in the cart.",
        "The structure of the catalog could affect performance.",
        "To make manageability easy from a Ul standpoint.",
        "To track changes to values for individual meta fields on the entry.",
        "To know which media assets to use."
      ],
      "correctAnswer": [2, 3],
      "explanation": "",
    },
    {
      "question": "Custom access control can be set in the UI at which levels of a catalog and which types in a catalog?",
      "answers": [
        "Catalog Root level",
        "Catalog level",
        "Category level",
        "Entry level",
        "All of the content types",
        "Only at content types that is not a SKU"
      ],
      "correctAnswer": [2, 3],
      "explanation": "",
    },
    {
      "question": "Which statement is not true regarding the catalog modeling API?",
      "answers": [
        "ICatalogSystem is an interface used for working with catalog modeling.",
        "The ECF catalog interface includes both a DTO-based and Object-based API.",
        "The DTO-based API applied on the underlying Object-based API.",
        "The ItemAttribute property of an object can be used for accessing metadata."
      ],
      "correctAnswer": [3],
      "explanation": "DTO based",
    },
    {
      "question": "Which statement is not true regarding the catalog modeling API?",
      "answers": [
        "IContentRepository is an interface used for working with both page modeling and catalog modeling.",
        "The ICatalogSystem interface includes a DTO-based API",
        "The DTO-based API relies on the underlying IContentRepository API.",
        "We can use ContentLoader to load details of a catalog content. ",
        "AssociationGroupDefinition like \"CrossSell\" or \"UpSell\" are stored in the IContentRepository"
      ],
      "correctAnswer": [3, 5],
      "explanation": "DTO based, CrossSell & UpSell",
    },
    {
      "question": "How should you access the media connected to a product?",
      "answers": [
        "By using the VariantsReference property on an instance of a ProductContent",
        "By using the CommerceMediaCollection property on an instance of a content type",
        "By calling the GetChildren method on an instance of IContentRepository",
        "By using the Image or File properties of a MetaClass in MetaDataPlus.",
        "By calling GetAssociations on an ILinksReposioty class."
      ],
      "correctAnswer": [2],
      "explanation": "CommerceMediaCollection",
    },
    {
      "question": "In your product rendered code, which of the following will return the CatalogEntryId for the ProductContent content reference?",
      "answers": [
        "The ProductContent.CatalogEntryId property.",
        "The ReferenceConverter.GetObjectId(...) method",
        "The ProductContent.ContentGuid property.",
        "The ProductContent.GetObjectld(...) method. ",
        "The ProductContent.ContentTypeID property.",
        "The ReferenceConverter.GetEntryContentLink(...) method."
      ],
      "correctAnswer": [2],
      "explanation": "Commerce API: ReferenceConverter.GetObjectId(Content Reference contentLink) to convert the ContentLink to CatalogEntryId?",
    },
    {
      "question": "How should you get a ContentReference to a product if you have the product code",
      "answers": [
        "new ContentReference(productCode)",
        "new LinksRepository.GetAssociations(productCode)",
        "ServiceLocator.Current.GetInstance<IContentLoader>().Get<ProductContent>(productCode)",
        "ServiceLocator.Current.GetInstance<ReferenceConverter>().GetContentLink(productCode)"
      ],
      "correctAnswer": [4],
      "explanation": "ReferenceConverter",
    },
    {
      "question": "You have category product listing page that shows 20 products. What is the most optimal way to show items and ensure your page loads as fast as possible for every request?",
      "answers": [
        "Use ServiceLocator.Current.GetInstance<ICatalogSystem>().FindItems() with page size of 20 and correct starting record.",
        "Use the GetCatalogEntries(...) method of the CatalogContentLoader",
        "Use Search Provider system or Find Commerce to perform search and read values from the index",
        "Use ServiceLocator.Current.GetInstance<ICatalogSystem>().GetCatalogEntries(catalogName, categoryCode)"
      ],
      "correctAnswer": [3],
      "explanation": "",
    },
    {
      "question": "Your product listing page is performing poorly. Upon investigation you find out that the corresponding controller is using IContentLoader.GetChildren to get all entries in the current category. What can be done to improve performance?",
      "answers": [
        "Reduce the number of items displayed per page for product listing.",
        "Implement cache for the result of IContentLoader.GetChildren",
        "Use IRelationRepository.GetChildren<NodeEntryRelation> to get children entry of current category, then use IContentLoader.GetItems with batching to load the contents.",
        "Use a document-based index search to build the product listing feature. "
      ],
      "correctAnswer": [4],
      "explanation": "",
    },
    {
      "question": "Which two actions will occur when a product is linked to a \"Weekly specials\" category?",
      "answers": [
        "A new link of type Association will be created for the product that points to the \"Weekly specials\" category",
        "Only the product itself will be linked to the \"Weekly specials\" to category.",
        "The product will be detached from the category where it originally resided",
        "The product will be listed as a relation for the \"Weekly specials\" category",
        "The \"Weekly specials\" category will be listed as a relation for the product",
        "An event of IContentEvents is triggered."
      ],
      "correctAnswer": [2, 5],
      "explanation": "product itself;\ncategory will be listed as a relation for the product",
    },
    {
      "question": "Your site is selling exclusive TVs. What would be appropriate to use for storing and loading types like accessories, extra insurances and wall mount kits in a sidebar linked to a specific TV-SKU? The extra items would be shown on the TV's details page?",
      "answers": [
        "ILinksRepository",
        "IAssociationRepository",
        "IContentLoader",
        "CatalogHelper",
        "ObjectHelper",
        "IContentRepository"
      ],
      "correctAnswer": [2],
      "explanation": "ILinksRepository (This is no longer valid in Commerce 12 and needs to be removed later-use IAssociationRepository), in Commerce 13, use IRelationRepository",
    },
    {
      "question": "A shirt is available in three different sizes and three different colors, but the description is the same regardless of size or color. What catalog entry type should be used to store the description?",
      "answers": [
        "Variation",
        "Product",
        "Bundle",
        "Package"
      ],
      "correctAnswer": [2],
      "explanation": "",
    },
    {
      "question": "Which statements are true regarding bundles, packages and SKUs?",
      "answers": [
        "A bundle is a collection of variations and SKUs allowing customers to purchase two at once. or more items",
        "The Price for a Bundle is determined by the items in the bundle",
        "A package is comparable to an individual SKU (variation), because the package item must be purchased as a whole.",
        "The same SKU cannot be added to both a bundle and a package.",
        "A package can contain bundles."
      ],
      "correctAnswer": [1, 2, 3],
      "explanation": "",
    },
    {
      "question": "On which two content types can prices be set in a default installation?",
      "answers": [
        "Variation",
        "Product",
        "Bundle",
        "Package",
        "Category"
      ],
      "correctAnswer": [1, 4],
      "explanation": "",
    },
    {
      "question": "On which two content types can inventory record be set in a default installation?",
      "answers": [
        "Variation",
        "Product",
        "Bundle",
        "Package",
        "Category",
        "Catalog"
      ],
      "correctAnswer": [1, 4],
      "explanation": "",
    },
    {
      "question": "A marketer for a store wants to market a razor blade shaving cream and aftershave so that a customer can easily purchase them together. Each item should be placed in the cart as an individual line item. What catalog entry type should be used to describe the combination of these items?",
      "answers": [
        "Variation",
        "Product",
        "Bundle",
        "Package",
        "Category",
        "Catalog"
      ],
      "correctAnswer": [3],
      "explanation": "",
    },
    {
      "question": "Which classes can have prices?",
      "answers": [
        "VariationContent",
        "ProductContent",
        "BundleContent",
        "PackageContent",
        "EntryContentBase"
      ],
      "correctAnswer": [1, 4],
      "explanation": "",
    },
    {
      "question": "What is the recommended way to set up the system, so the strongly typed model class refers to the existing meta class in MetaDataPlus?",
      "answers": [
        "Decorate the model class with the CatalogContentType attribute and set the MetaClassName property to the name of the meta data class.",
        "Decorate the model class with the CatalogContentType attribute and set the ID property to the Id of the meta data class.",
        "Create an initialization module and register the connection using the IContentTypeRepository service.",
        "Create an initialization module and register the connection using the IContentRepository service."
      ],
      "correctAnswer": [1],
      "explanation": "Decorate; MetaClassName",
    },
    {
      "question": "Which statements are true regarding MetaFields in MetaDataPlus?",
      "answers": [
        "You can't change their types once they are created.",
        "A custom MetaField in MetaDataPlus must be defined in code or created in a UI before",
        "You can always represent a MetaField with a strongly typed property.",
        "A MetaField can be shared between any MetaClasses.",
        "A MetaField can be shared between MetaClasses, but only within the same sub system, either catalog or order."
      ],
      "correctAnswer": [1, 2, 5],
      "explanation": "Can't change once created; must be defined in UI; MetaClasss, only within same sub system. \nđề thi có thể hỏi phủ định lại nên cần nắm kiến thức thực sự về MetaField.",
    },
    {
      "question": "A site in development already has the catalog data imported, but does not have any warehouse or inventory data configured yet. The site will be used to sell items both for delivery and at brick mortar locations. Which code snippet completes the following sample code by saving the warehouse to the database?",
      "answers": [
        "warehouse.AcceptChanges();",
        "ServiceLocator.Current.GetInstance<IWarehouseRepository>().Save(warehouse);",
        "CatalogContext.Current.Save(warehouse)",
        "The warehouse is automatically saved as the properties are set."
      ],
      "correctAnswer": [2],
      "explanation": "IWarehouseRepository",
    },
    {
      "question": "What completes the following sample code, so a warehouse is persisted to the database?",
      "answers": [
        "Setting InventoryTrackingStatus to true ",
        "When WarehouseContactInformation is set the warehouse is saved, no more code is needed.",
        "ServiceLocator.Current.GetInstance<IWarehouseRepository>().Save(warehouse);",
        "Explicity set warehouse.Created = DateTime.Now;"
      ],
      "correctAnswer": [3],
      "explanation": "IWarehouseRepository",
    },
    {
      "question": "Catalog data is imported but no warehouse or inventory date configured. Which code snippet completes the following sample code by persisting a warehouse to the database?",
      "answers": [
        "ServiceLocator.Current.GetInstance<IWarehouseInventoryService>().Save(new WarehouseInventory(WarehouseCode = warehouse.Code));",
        "ServiceLocator.Current.GetInstance<IWarehouseRepository>().Save(warehouse);",
        "Warehouse.Created = DateTime.Now;",
        "The warehouse is automatically saved as the properties are set."
      ],
      "correctAnswer": [2],
      "explanation": "IWarehouseRepository",
    },
    {
      "question": "You are trying to load all inventory records of given variants by their content links. How can you improve the below code? Choose all that applies?",
      "answers": [
        "There should be a cache for records to avoid loading from database again.",
        "Instead of calling IContentLoader.GetItems, use ReferenceConverter to get the codes from the content links.",
        "Instead loading inventories for each variant code, load them by batch.",
        "Use IInventoryService.List then filter inventory records that match given content"
      ],
      "correctAnswer": [2, 3],
      "explanation": "",
    },
    {
      "question": "You have the following type you want to create rendering for. What would be the most suitable controller declaration?",
      "answers": [
        "Public class Shirt ProductController: ContentController<ProductContent>",
        "Public class ShirtProductController<T>: ContentController<T> where T: CatalogContentBase",
        "Public class Shirt ProductController: ContentController<ShirtProduct>",
        "Public class ShirtProductController: ContentController<EntryContentBase>",
        "Public class ShirtProductController: ActionControllerBase",
        "Public class ShirtProductController: MvcContentRenderer"
      ],
      "correctAnswer": [3],
      "explanation": `ShirtProduct: ProductContent
        ProductContent: CatalogContentBase ShirtProduct: EntryContentBase
        ShirtProduct: EntryContentBase`,
    },
    {
      "question": "[WebForms] You have a product type called MyProduct. How should you declare the template that renders products of that type?",
      "answers": [
        "public class MyProductTemplate: Page< MyProduct>",
        "public class MyProductTemplate: ContentPageBase<MyProduct>",
        `[CatalogContentType(MetaDataName="MyProduct")]
        public class MyProductTemplate: Page`,
        "[ContentType(typeof(MyProduct))] public class MyProductTemplate: Template Page"
      ],
      "correctAnswer": [2],
      "explanation": `3,4: The CatalogContentType and ContentType is to declare the product content type, not the template that renders the content page.
      Answer: 2 - You should inherit from ContentPageBase with product content type
      `
    },
    {
      "question": "What is the recommended way to create a new object instance of the MyProduct type, if you intend to add it to the database?",
      "answers": [
        "Var myproduct = ServiceLocator.Current.GetInstance<IContentRepository>().Get<MyProduct>(categoryLink);",
        "Var myProduct = new MyProduct() {ParentLink = categoryLink};",
        "Var myProduct = DataFactory.Instance.Get<MyProduct>(categoryLink);",
        "var myProduct = ServiceLocator.Current.GetInstance<IContentRepository>().GetDefault<MyProduct>(categoryLink);"
      ],
      "correctAnswer": [4],
      "explanation": `IContentRepository; GetDefault`
    },
    {
      "question": `You have the following property for a product description.
        Public virtual XhtmlString MainContent { get; set; }
      Which two attributes should you decorate the property with to have it explicitly searchable as individual words using the provider model?`,
      "answers": [
        "[Tokenize]",
        "[UselnComparision]",
        "[IncludeValuesinSearchResult]",
        "[Searchable]"
      ],
      "correctAnswer": [1, 4],
      "explanation": "",
    },
    {
      "question": `What is the primary reason for a meta field to be tokenized?`,
      "answers": [
        "To search for individual words.",
        "To improve performance.",
        "To be included in the search index.",
        "To be linked to its meta class in the search index."
      ],
      "correctAnswer": [1],
      "explanation": "",
    },
    {
      "question": `Which class cannot be used to write to a SKU?`,
      "answers": [
        "VariantContent",
        "Entry",
        "CatalogEntryDto",
        "Stream"
      ],
      "correctAnswer": [4],
      "explanation": `
      Note: Câu hỏi về SKU, nên Variation đúng
      Bên ECF, thì dù SKU và Product đều là Entry, nhưng ta vẫn có thể dùng Entry để persist/write xuống DB được
      Còn bên Content Approach (Epi API) thì không như thế, mặc dù VariationContent: EntryContent, ProductContent : EntryContent
      `,
    },
    {
      "question": `Which classes cannot be used to persist values to a SKU?`,
      "answers": [
        "VariantContent",
        "Entry",
        "CatalogEntryDto",
        "ProductContent"
      ],
      "correctAnswer": [4],
      "explanation": ``,
    },
    {
      "question": `You're creating a service to import updated metadata for SKUs in your catalog. Which of the following classes in a default installation could be used to update the values of custom metadata fields on the SKUs in your system?`,
      "answers": [
        "MetaField",
        "VariationContent",
        "MetaObject ",
        "MetaClass ICatalogHelper"
      ],
      "correctAnswer": [2, 3],
      "explanation": "VariationContent (the CMS way) and MetaObjects ( the Commerce ECF API way)",
    },
    {
      "question": `Which is a property of a ProductVariation relation?`,
      "answers": [
        "SortOrder",
        "Group",
        "Description",
        "Type "
      ],
      "correctAnswer": [1],
      "explanation": ``,
    },
    {
      "question": `Which of the following two steps are required when adding a new language to an existing catalog?`,
      "answers": [
        "Ensure that the language is activated in the CMS administrative interface.",
        "Ensure that all user-defined fields are enabled for multiple languages.",
        "Make sure that a replacement language is not configured on the CMS start page.",
        "Add a new URL segment for the language on the catalog.",
        "Enable the language on the catalog."
      ],
      "correctAnswer": [1, 5],
      "explanation": "",
    },
    {
      "question": `When will a newly added language be available in the Catalog UI (edit view) in CMS?`,
      "answers": [
        "Enabling the language in the CMS admin interface is enough.",
        "When it has been added in the CMS administrative interface.",
        "When it has been added to the catalog root.",
        "When it has been enabled in the CMS page tree structure.",
        "When it has been activated from the \"All properties\" edit view."
      ],
      "correctAnswer": [5],
      "explanation": `You need to enable it in CMS admin and edit first, and then activate it for each catalog in the Commerce catalog view.
      Note: With commerce, add new available language in AdminMode is not enough (A),
      after have new available in AdminMode, we need to edit the Catalog /All prop mode / tick to newly added available languages
      `,
    },
    {
      "question": `Which option does not list a correct set of the Commerce-related scheduled jobs?`,
      "answers": [
        "Subscription Payment Plans. Removed Expired Carts.",
        "Rotate Encryption Keys, Archive Function.",
        "Shipment Releasing. Full Search Index.",
        "Incremental Search Index, Shipment Releasing."
      ],
      "correctAnswer": [2],
      "explanation": ``,
    },
    {
      "question": `You want to add SKUs in a non-published status. Which method should you use to save SKUs to the catalog system?`,
      "answers": [
        "ServiceLocator.Current.GetInstance<IContentRepository>().Save(...)",
        "CatalogContext.Current.SaveCatalogEntry(...)",
        "ContentReposotory.SaveCatalogEntry(...)",
        "CataloglmportExport.Import(...)"
      ],
      "correctAnswer": [1],
      "explanation": `(2020 answer)
      Post to service API: /episerverapi/commerce/entries
      `,
    },
    {
      "question": `You want to add SKUs in a non-published status. Which method should you use to save SKUs to the catalog system?`,
      "answers": [
        "Post to service API: /episerverapi/commerce/entries",
        "CatalogContext.Current.SaveCatalogEntry(...)",
        "ContentReposotory.SaveCatalogEntry(...)",
        "CataloglmportExport.Import(...)"
      ],
      "correctAnswer": [1],
      "explanation": `/commerce/entries`,
    },
    {
      "question": `Which of the following data cannot be used to limit which catalog entries are available for viewing or purchase?`,
      "answers": [
        "The current market.",
        "The published status of the entry.",
        "The current user's entry permissions.",
        "The current date."
      ],
      "correctAnswer": [3],
      "explanation": ``,
    },
    {
      "question": `What will happen when a merchandiser deletes a category containing catalog entries?`,
      "answers": [
        "The deleted category is moved to the wastebasket",
        "Only the category itself will be deleted. Catalog entries in the category will be available in the catalog root level",
        "All catalog entries in the category will be deleted, regardless of the type of entry and category relations of these",
        "If there are catalog entries that are linked only to the category to be deleted, these entries will be deleted as well"
      ],
      "correctAnswer": [4],
      "explanation": `
      Câu A: không có thùng rác cho catalog => sai
      Entry thì có primary cat và additional cat
      Nếu entry chỉ có primary cat, và xóa primary cat thì entry sẽ bay màu
      Nếu entry A thuộc pri cat A, linked tới second cat B, xóa cat A, thì entry A được đưa ra catalog Root (và không có primary cat nữa), entry A vẫn được link tới cat B
      `,
    },
    {
      "question": `What will happen when a merchandiser deletes a category/catalog node containing catalog entries?`,
      "answers": [
        "All catalog entries in the category will be deleted, regardless of the type of entry and category relations for these.",
        "If the deleted category contained catalog entries linking to other categories, all links to the deleted category will be removed and other links kept intact.",
        "Only the category itself will be deleted. Catalog entries in the category will remain and will be available in the catalog root level.",
        "If the deleted category contains catalog entries linking to packages, any linked packages will be deleted"
      ],
      "correctAnswer": [2],
      "explanation": "",
    },
    {
      "question": `You are creating a Product and a Variation with code using IContentRepository. When doing so you receive a ContentReference back for the Product (newProductReference) and the Variation (newSkuReference) when saving them. Now you want to set the reference between the Variation and the Product, what code would serve this purpose?`,
      "answers": [
        `ContentReference newProductReference = contentRepository.Save(newProduct, SaveAction.Publish, EPiServer.Security.AccessLevel.NoAccess);`,
        `
        Association entryAssociation = new Association
        {
        Source = newProductReference,
        Target = newSkuReference,
        SortOrder = 100
        }
        _associationRepository.UpdateAssociation(entryAssociation);
        `,
        `
        Association entryAssociation = new Association
        {
        Source = newSkuReference,
        Target = newProductReference,
        SortOrder = 100
        };
        _associationRepository.UpdateAssociation(entryAssociation);
        `,
        `
        ProductVariation prodVariationLink = new ProductVariation()
        {
        Child = newSkuReference,
        Parent = newProductReference,
        SortOrder = 100
        }
        _relationRepository.UpdateRelation(prodVariationlink);
        `,
        `
        ProductVariation prodVariationLink = new ProductVariation
        {
        Child = newProductReference,
        Parent = newSkuReference,
        SortOrder = 100
        );
        _relationRepository.UpdateRelation(prodVariationLink);
        `
      ],
      "correctAnswer": [4],
      "explanation": `
      Note: A sai vì còn không có link tới child
      B và C sai vì là association (dùng cho UpSell, CrossSell, khi link SKU này tới SKU khác, SKU này tới Product khác) trong khi quan hệ Product-Variant là Relation
      Nên chỉ có D là đúng
      Lưu ý thêm: từ Commerce 12: the properties are still supported but recommended is to use the new Parent/Child properties instead.
      Var relation = new ProductVariation() {
        Child = variant,
        Parent = product,
        SortOrder = order
      }
      Source = cha, target = con
      `,
    },
    {
      "question": `You are creating a Product and a Variation with code using IContentRepository. When doing so you receive a ContentReference back for the Product (newProductReference) and the Variation (newSkuReference) when saving them. Now you want to set the reference between the Variation and the Product, what code would serve this purpose?`,
      "answers": [
        "EntryUpdated",
        "AssociationUpdated",
        "RelationUpdated",
        "ContentPublished"
      ],
      "correctAnswer": [3],
      "explanation": `RelationUpdated;
       Note: có 2 event có thể liên quan đến việc link product, catalog: Relation và Entry:
      API: Mediachase.Commerce.Catalog.Events.CatalogEventListenerBase (episerver.com)
      Adding a secondary node - entry relation takes a long time for so (episerver.com)
      Như cái bài viết của Douglas Douglas thì khi chúng ta thay đổi link một product vào category thì debug sẽ ra được event RelationUpdated. Nên câu C là đúng.
      `,
    },
    {
      "question": `When prices are updated in the Pricing overview for a category, when will the update be made to the database?`,
      "answers": [
        "Together with other content changes for the entry when published.",
        "Instantly during editing.",
        "Together with the inventory information when this is changed.",
        "When \"schedule for publish\" has been set.",
        "When the Price listing dialog is closed"
      ],
      "correctAnswer": [2],
      "explanation": `Instantly`,
    },
    {
      "question": `Which classes can have prices?`,
      "answers": [
        "VariationContent",
        "ProductContent",
        "BundleContent",
        "PackageContent",
        "EntryContentBase"
      ],
      "correctAnswer": [1, 4],
      "explanation": "",
    },
    {
      "question": `A B2B site has a complex pricing configuration that will vary prices based on the quantity of the item purchased and the customer making the purchase. When multiple price records are valid for a purchase, what will by default determine which price is used?`,
      "answers": [
        "The price record that is most specific to the customer making the purchase.",
        "The price record that has the highest required quantity (up to the quantity of the purchase).",
        "The price record that has the lowest unit price.",
        "The developer is responsible for handling this scenario in code."
      ],
      "correctAnswer": [3],
      "explanation": `mặc định, commerce lấy giá thấp nhất, phương án có lợi nhất cho khách hàng`,
    },
    {
      "question": "What is the first recommended step of a return (RMA) process?",
      "answers": [
        "Call ReturnExchangeManager.AddNewReturnFormToPurchaseOrder(PurchaseOrder)",
        "Create a new OrderGroup and mark it as \"return\".",
        "Create a new Purchase Order with a pointer to a parent Purchase Order. ",
        "Call myPurchase Order.returnOrderFroms.AddNew() and mark it as \"exchange\"."
      ],
      "correctAnswer": [1],
      "explanation": "ReturnExchangeManager.AddNewReturnFormToPurchaseOrder",
    },
    {
      "question": "Which statement is not true when creating a custom payment provider?",
      "answers": [
        "Every payment provider must implement the IPaymentGateway interface.",
        "IPaymentPlugin works with IPayment. ",
        "The ProcessPayment method has to be implemented.",
        "A UserControl for the payment methods in Commerce Manager should implement the interface IGatewayControl",
        "The custom payment provider needs to be configured to the PaymentPlanType attribute in the efc.order.config."
      ],
      "correctAnswer": [5],
      "explanation": "PaymentPlanType",
    },
    {
      "question": "Which two steps are required to as a pre-written payment gateway implementation provided by Episerver as a download to your solution?",
      "answers": [
        "Add the implementation files to Commerce Manager and your front-end site",
        "Add the payment provider to the ecf.orders.config file.",
        "Register the implementation in ServiceLocator as part of the IPaymentGateway collection during initialization.",
        "Create a new payment method using this gateway in Commerce Manager.",
        "Execute PaymentMethodParameter.AddPaymentMethodParameterRow(...)."
      ],
      "correctAnswer": [1, 4],
      "explanation": "https://world.episerver.com/documentation/items/installation Instructions/Episerver Commerce/DataCash-Payment-Provider-Installation-and-User-Guide/",
    },
    {
      "question": "How should your retrieve a list of the payment options configured in Commerce Manager / for the current site visitor / from the database?",
      "answers": [
        "By using PaymentTransactionTypeManager.GetAvailablePaymentsByTransactionType()",
        "By using the CartHelper.OrderForm.Payments collection.",
        "By using PaymentManager.GetPaymentMethods(...)",
        "By using PurchaseOrderManager.GetPaymentMethodsByMarket(...)"
      ],
      "correctAnswer": [3],
      "explanation": "PaymentManager",
    },
    {
      "question": "When should you use the TransactionType.Authorize on a CreditCardPayment in your cart?",
      "answers": [
        "To authorize a refund transaction.",
        "To authorize the credit card transaction and transfer funds.",
        "To authorize the credit card and reserve funds for the order.",
        "To retrieve information regarding recent customer payment transactions."
      ],
      "correctAnswer": [3],
      "explanation": "Vi authorize nên C vì nó chỉ reserve fund (Requests to charge a cardholder. An approved Authorization transaction reduces the cardholder's open-to-buy amount (the amount that can currently be charged against the account), but does not actually capture the funds). Còn nếu TransactionType = Sale, thì sẽ là B, vì nó thu tiền luôn",
    },
    {
      "question": "You want to create a two-part credit card payment process where the funds are withdrawn as a separate process in a service independent of the website after a customer places the order. Which TransactionType enumeration is used on the payment transaction in the service?",
      "answers": [
        "TransactionType.Sale",
        "TransactionType.Authorize",
        "TransactionType.Capture",
        "TransactionType.Other"
      ],
      "correctAnswer": [2],
      "explanation": "",
    },
    {
      "question": "Which of the following are not uses of the PaymentMethodDto?",
      "answers": [
        "Storing restrictions for particular payment methods.",
        "Providing localization for payment method descriptions",
        "Associating markets with payment methods.",
        "Associating currency rates with payment methods"
      ],
      "correctAnswer": [4],
      "explanation": "currency rates",
    },
    {
      "question": "What is the return type from PaymentManager.GetPaymentMethodByMarket(...)?",
      "answers": [
        "Payment",
        "PaymentMethod",
        "PaymentMethodRow",
        "PaymentMethodDto"
      ],
      "correctAnswer": [4],
      "explanation": "DTO",
    },
    {
      "question": "How to set the address for a newly added IPayment using the IShipment's address during a checkout sequence? The buyer is logged in and have the PreferredShippingAddress set",
      "answers": [
        "Set IPayment.BillingAddress using the OrderAddressHelper.Clone(...) method, passing in the existing shipping address.",
        "Set IPayment.BillingAddress to the shipping address",
        "Set the IPayment.BillingAddress to the buyers PreferredShippingAddress as this is set",
        "Create a new OrderAddress instance, passing in the existing shipping address in the constructor. Set the IPayment.BillingAddress to the new OrderAddress."
      ],
      "correctAnswer": [4],
      "explanation": "Câu này hỏi về chuyên tạo môi một Payment, khi tạo mới thì nó sẽ không có address, mình cần gần coi address (từ shipping address) cho nó",
    },
    {
      "question": "How should you set the address for a credit card payment in your checkout to an existing order group shipping address?",
      "answers": [
        "Set Payment.BillingAddressid using the OrderAddressHelper.GetAddressString0 method, passing in the existing shipping address.",
        "Set Payment.BillingAddressId to the Name property value of the shipping address.",
        "Set the Payment.BillingAddressId to the OrderAddressId of the shipping address.",
        "Create a new OrderAddress instance, passing in the existing shipping address in the constructor. Set the Payment BillingAddressId to the new OrderAdress.Addressid."
      ],
      "correctAnswer": [3],
      "explanation": "Payment.BillingAddressId to the OrderAddressId",
    }, {
      "question": "A merchandiser wants to be notified when a promotion is updated. How to achieve that?",
      "answers": [
        "Use the PromotionEngineContentLoader",
        "Use the PromotionTypeHandler",
        "Implement CatalogEventListenerBase.",
        "Listen to IContentEvents.",
        "Implement CatalogKeyEventListener"
      ],
      "correctAnswer": [4],
      "explanation": ""
    },
    {
      "question": "A Promotion needs to be scheduled to be available to site visitors in the near future. What are the right ways to do it?",

      "answers": [
        "A promotion is always available after creation.",
        "Schedule the parent campaign and make sure the promotion inherits that schedule. ",
        "Override the parent campaign schedule with promotion's own schedule. ",
        "Set the promotion to be DelayedPublish and set a time for it. "
      ],
      "correctAnswer": [2, 3],
      "explanation": ""
    },
    {
      "question": "You need to exclude some products from promotion evaluation, for example gift cards. How can that be done?",
      "answers": [
        "Override the PromotionEngineContentLoader to make sure the excluded entries are not loaded.",
        "Intercept the default implementation of IPromotionEngine and remove those products before evaluation, then add them back.",
        "Add the content link of those products to each and every promotion.ExcludedItems",
        "Use EntryFilterSettings.AddFilter to exclude the products."
      ],
      "correctAnswer": [4],
      "explanation": ""
    },
    {
      "question": "In a default installation, where to configure exclusions of certain entries from being put on discounts/promotions? Select all that applies.",

      "answers": [
        "In the CMS Admin view.",
        "In XML configuration files",
        "In an Initialization module",
        "In the promotion UI. at a campaign",
        "In the promotion UI, at a built-in promotion",
        "With code and/or UI in custom promotions."
      ],
      "correctAnswer": [3, 5, 6],
      "explanation": "Initialization; promotion UI, at a built-in promotion; custom promotions"
    },
    {
      "question": "Which two statements are true regarding what you can do with Commerce content types and properties when working in Commerce Manager and the CMS UI interfaces?",
      "answers": [
        "Assign different access levels for properties by grouping them on tabs.",
        "Convert older catalog entry models defined in code to newer models and in database tables for the older model's properties.",
        "Add new properties to a content type/MetaClass ",
        "Set restrictions on what content types that can be created beneath other content types.",
        "Move default properties, like \"Name\", to another tab.",
        "Delete properties that have been defined in code."
      ],
      "correctAnswer": [1, 3],
      "explanation": "we cannot delete prop (defined in code) in AdminMode Name is system built-in prop, and in the upper panel, not a normal prop"
    },
    {
      "question": `A customer is purchasing five items. The customer user name is CUST01, they are in customer group GROUP01 and the item has the following price values configured:
	Customer CUSTO1, Minimum Quantity 0, $12.00
	Customer Group GROUPO1, Minimum Quantity 6, $7.00
	All Customers, Minimum Quantity 0, $10.00
	All Customers, Minimum Quantity 3, $9.00,
	What will be price of each item be?`,
      "answers": [
        `$7.00`,
        `$9.00`,
        `$10,00`,
        `$12.00`,
      ],
      "correctAnswer": [2],
      "explanation": `All prices apply to the customer, but the cheapest option is not enabled due to not meeting limit restriction`,
    },
    {
      "question": `Which two approaches are valid for retrieving a list of prices for a SKU?`,

      "answers": [
        `Get prices using the StoreHelper.GetPrice(...) method and determine the correct price for the customer`,
        `Call the GetPrices() method of the IPriceService`,
        `Call the GetPrices() extension method on an instance of VariationContent`,
        `Call CatalogContext.Current.GetCatalogEntryDto(currentContent.Code, new CatalogEntry ResponseGroup (CatalogEntry ResponseGroup.ResponseGroup CatalogEntry Full)).SalePrice`,
        `decimal quantity = 8M: Currency currency = new Currency("usd"); bool returnCUstomerPricing = false, ItemCollection<Episerver.Commerce.SpecializedProperties.Price> prices = currentContent.GetCustomerPrices(currency, quantity, returnCustomerPricing)`
      ],
      "correctAnswer": [2, 3],
      "explanation": "IPriceService; VariationContent",
    },
    {
      "question": `Which two approaches are valid for retrieving a list of prices for a SKU?`,

      "answers": [
        `Call the GetCustomerPrices() extension method for a SKU without parameters.`,
        `Call the GetCustomerPrices() extension method for a SKU with full set of parameters and ReturnCustomerPricing is set to "true"`,
        `Call the GetPrices(...) method of the IPriceService`,
        `Call the List(...) method of the IPriceDetailService`,
        `Call the method GetCatalogEntryDto(currentContentCode, new CatalogEntryResponseGroup(CatalogEntryResponseGroup.ResponseGroup.CatalogEntryFull)).SalePrice at the implementation of ICatalogSystem`],
      "correctAnswer": [3, 4],
      "explanation": "GetPrices(); List();",
    },
    {
      "question": `Where to configure if prices include taxes or not?`,
      "answers": [
        `In configuration for each catalog`,
        `At the Market`,
        `At the price class (PriceValue) itself`,
        `In the administrative UI of CMS E. In the catalog UI of CMS`,
        `Overriding the tax calculator and adding a property to the line item.`,
      ],
      "correctAnswer": [2],
      "explanation": "Market",
    },
    {
      "question": `What interface to use when adding custom rules for price evaluation with the default implementation of IPriceService?`,
      "answers": [
        `IOrderGroupBuilder`,
        `IOrderGroupCalculator`,
        `ILineItemCalculator`,
        `IPriceOptimizer`,
        `IPricing`,
        `IPriceValue`
      ],
      "correctAnswer": [4],
      "explanation": "",
    },
    {
      "question": `You want to entirely change the way your line items are calculated. What should you do?`,
      "answers": [
        `Inherit DefaultOrderGroupCalculator and override GetSubTotals method`,
        `Extend the Validate method on your ILineltemValidater implementation.`,
        `Create a class that implements the interface ILineltemCalculator`,
        `Set your custom value directly using your Lineltem["Extended Price"] = customvalue;`,
      ],
      "correctAnswer": [3],
      "explanation": "ILineltemCalculator",
    },
    {
      "question": `Using best practices (recommended way) which option will lists all orders for the currently logged-in user/account?`,
      "answers": [
        `Purchase Order[] po = OrderContext.Current.FindActiveOrders(...)`,
        `Purchase Order[] po = OrderContext.Current.FindActiveOrders(...)`,
        `Purchase Order[] po = OrderContext.Current.FindCarts(...)`,
        `Purchase Order[] po = OrderContext.Current.GetPurchaseOrders(...)`,
      ],
      "correctAnswer": [4],
      "explanation": `(Obsolete(“This method is no longer used. To replicate the functionalities, use Load<T> with each order type and combine the result. Will remain at least until January 2020.")] IEnumerable<IOrderGroup>.Load(Guid customerld, string name);\n
      GetPurchaseOrders()`,
    },
    {
      "question": `Using best practices (recommended way) which option will lists all orders for the currently logged-in user/account?`,
      "answers": [
        `Purchase Order[] po = OrderContext.Current.FindActiveOrders(...)`,
        `IEnumerables(OrderGroups).orders.OrderContext.Current.GetPurchaseOrders(...).ToList();`,
        `IEnumerable<IOrderGroup>.orders.orderRepository.Load(): with no parameters`,
        `PurchaseOrder po = OrderContext.Current.FindActiveOrders(...);`,
      ],
      "correctAnswer": [2],
      "explanation": "GetPurchaseOrders"
    },
    {
      "question": `Which is the easiest way to display the order history of a customer?`,
      "answers": [
        `OrderContext.Current.FindActiveOrders();`,
        `OrderContext.Current.FindCarts (OrderSearchParameters parameters, OrderSearchOptions options, out int totalRecords);`,
        `call SaveAsPurchaseOrder(...) on an instance of IOrderRepository.`,
        `Call the Load<PurchaseOrder>() of an IOrderRepository instance with appropriate overloads for the customer and purchase order name.`,
      ],
      "correctAnswer": [4],
      "explanation": `Đề thi 2020 có thể hỏi và có đáp án là dùng Search (Find, Navigation)[Obsoletel"This method is no longer used.To replicate the functionalities, use Load < T > with each order type and combine the result.Will remain at least until January 2020.")]IEnumerable<1OrderGroup> Load(Guid customerld, string name) API cu là OrderContext.Current Find PurchaseOrders()`
    },
    {
      "question": `What is the preferred way for custom code to be added and executed when a cart is converted to a purchase order?`,
      "answers": [
        `By extending with a handler for the IOrderRepositoryCallback service`,
        `By extending with a handler for the CatalogKeyEventBroadcaster service`,
        `By adding an activity to the POSaveChanges Activity Flow`,
        `By extending the Purchase Order class.`
      ],
      "correctAnswer": [1],
      "explanation": "IOrderRepositoryCallback"
    },
    {
      "question": `A merchandiser wants to be notified when a cart is converted to a purchase order. What is the recommended way of doing this?`,
      "answers": [
        `By extending with a handler for the IOrderEvents`,
        `By extending with a handler for the IContentEvents`,
        `By extending the PurchaseOrder class.`,
        `By overriding methods in IOrderRepository.`
      ],
      "correctAnswer": [4],
      "explanation": "Dump: IOrderRepository. Từ sau bản 12 là sử dụng IOrderEvents https://world.episerver.com/documentation/developer-guides/commerce/orders/order-events/"
    },
    {
      "question": `Which method will convert a Cart to a PurchaseOrder?`,
      "answers": [
        `myCart.SaveAsPurchaseOrder()`,
        `OrderContext.Current.GetPurchaseOrder(myCart.Owner, myCart.OrderGroupld)`,
        `myCart.GetPurchaseOrder() `,
        `PurchaseOrderManager.SaveAsPurchaseOrder(myCart)`,
        `Call an instance of IOrderRepository.SaveAsPurchaseOrder(...)`,
      ],
      "correctAnswer": [1, 5],
      "explanation": "E > A (single choice); SaveAsPurchaseOrder; IOrderRepository"
    },
    {
      "question": "Your solution has an integrated custom shipping gateway. How should you return a warning message from the shipping provider API?",
      "answers": [
        "Throw an exception in the ProcessShipping activity.",
        "Set the reference string parameter in the implementation's GetRate() method.",
        "Add the messages to the workflow Warnings collection.",
        "Throw an exception in the implementation's GetRate method.",
        "From a custom implementation of IShippingCalculator.",
        "By the OrderProcessingResult that is returned from the CompleteShipment method of the IShipment Processor."
      ],
      "correctAnswer": [2],
      "explanation": "",
    },
    {
      "question": "You are creating a custom shipping gateway implementation with Commerce Manager. What should you do to return the shipping rate and currency in the implementation?",
      "answers": [
        "Return a ShippingRate object with those properties in the GetRate method of the implementation",
        "Set properties on a Price object in the GetPrices method of the implementation",
        "Use the Shipment.GetRate() method to return the rate.",
        "Let the default CartValidate ActivityFlow return the shipping rate"
      ],
      "correctAnswer": [1],
      "explanation": "Shipping Rate Object; GetRate();",
    },
    {
      "question": "What should you do for your custom implementation of a shipping provider implementing the provided interfaces to calculate a shipping cost?",
      "answers": [
        "Return a ShippingRate object from the GetRate(...) method of the provided interfaces.",
        "Set properties on a Price object in the GetPrices(...) method. ",
        "Use the GetShippingCost(...) method of the shipping calculator to return the rate",
        "Register a custom implementation of the GetHandlingTotal method of the IOrderGroupCalculator interface."
      ],
      "correctAnswer": [1],
      "explanation": "ShippingRate object;  GetRate(...)",
    },
    {
      "question": "You are using the abstraction APIs to manage carts and orders. Which steps are required to create a new custom shipping gateway?",

      "answers": [
        "Implement IShippingGateway",
        "Implement IShippingPlugin",
        "Implement both IShippingGateway and IShipping Plugin",
        "Register your custom implementation with either ServiceConfiguration attribute or in an IConfigurableModule",
        "Create a corresponding shipping method in Commerce Manager"
      ],
      "correctAnswer": [2, 4, 5],
      "explanation": "IShippingPlugin; register in IConfigurableModule; Commerce Manager",
    },
    {
      "question": "You have discount A which gives 20% off for all items, and discount B which gives 40% discount for items in a specific category. However, you only want to make sure that only one of them is applied to each item. What should you do to give customers the best discount possible?",
      "answers": [
        "Make sure A have higher priority than B and excludes B and other level exclusion is enabled. ",
        "Make sure B have higher priority than A and excludes A and order level exclusion is enabled.",
        "Make sure A have higher priority than B and excludes B, and unit level exclusion is enabled. ",
        "Make sure B have higher priority than A and excludes A, and unit level exclusion is enabled."
      ],
      "correctAnswer": [4],
      "explanation": `These are ItemDiscount only C or D valid.
Best discount, B is better than A -> B should have higher priority.`,
    },
    {
      "question": "You have been asked to configure a promotion where, when the customer adds a particular SKU to their cart, another SKU will automatically be added to their cart without charge when promotions are calculated on the cart. What will ensure this occurs?",
      "answers": [
        "Call StoreHelper.GetDiscount Price().",
        "Set the reward type for an order promotion to \"get gifts items\" ",
        "Run the CartPrepare workflow.",
        "Set the promotion type to Catalog Entry: Buy catalog entry X. get catalog entry Y at a discount. Set the discount to 100%"
      ],
      "correctAnswer": [2],
      "explanation": "get gifts items",
    },
    {
      "question": "You have been asked to configure a promotion where, when the customer adds a particular SKU to their cart, another SKU will automatically be added to their cart without charge when promotions are calculated on the cart. What will ensure this occurs?",
      "answers": [
        "Create an item discount with the type of \"Cheapest Items for Free\", specify the condition and the SKU.",
        "Create an order discount with the type of \"Spend of Discount on Order\", specify the condition amount, then set the \"Amount off\" setting to the price of the SKU.",
        "Create an item discount with the type of \"Spend for Free Items\", specify the condition amount and the SKU.",
        "Create an item discount with the type of \"Spend for Discounted Selection\", specify the condition amount and the SKU, then set the Percentage off setting to 100 percent."
      ],
      "correctAnswer": [3],
      "explanation": `Specify for 2 SKU -> ItemDiscount
      https://world.episerver.com/documentation/developer-guides/commerce/marketing/new.promotions/ \n
      Spend for free item`,
    },
    {
      "question": "You want to implement a custom promotion that adds additional line items to your cart, as gifts. How can this be achieved?",
      "answers": [
        "From within the Evaluate method of the promotion's processor, return an instance of a RewardDescription having RewardType set to Free. ",
        "Inherit the default Promotion Engine and override the Run method.",
        "Have an EntryPromotion's processor treat its promotion as gift rewards.",
        "Use a custom ILineItemCalculator for your Promotion ProcessorContext, and have the calculator's Get DiscountedPrice return zero."
      ],
      "correctAnswer": [3],
      "explanation": "EntryPromotion's processor; gift rewards",
    },
    {
      "question": "In your checkout, you need to calculate all discounts for the customer's cart. How should you do this in a standard installation?",
      "answers": [
        "Call the Run(...) method on an instance of IPromotion Engine.",
        "Call the Evaluate(...) method on an instance of IPromotionEngine.",
        "Iterate through the Cart's LineltemColkection, call the StoreHelper.GetDiscountPrice and store the resulting discount price in the Lineltem.PlacePrice.",
        "Call the GetTotals(...) method on an instance of IOrderGroupTotalsCalculator",
        "Do nothing, it's applied automatically"
      ],
      "correctAnswer": [1],
      "explanation": "IPromotion Engine; RUN()",
    },
    {
      "question": "You want to add a custom promotion type (Fashion Winter Promotion) which inherits from the built-in BuyQuantifyGetItemDiscount, just to add a data property. This property is, however, not used by the calculation. How do you create a processor for the new promotion type?",
      "answers": [
        "There is no need to create a new processor, BuyQuantityGetItemDiscountProcessor will be used.",
        "You need to create a new processor which inherits from BuyQuantityGetItemDiscountProcessor, but no method needs to be overridden.",
        "You need to create a new processor which inherits from BuyQuantityGetItemDiscountProcessor, but all methods need to be overridden, even if they only call to base implementation.",
        "You need to create an entire new processor that inherits from PromotionProcessorBase."
      ],
      "correctAnswer": [1],
      "explanation": "no need to create a new processor",
    },
    {
      "question": `Which method will convert a Cart to a Purchase Order? (The variable orderRepository points to an instance of IOrderRepository)`,
      "answers": [
        `Servicelocator.Current.GetInstance<IOrderRepository>().SaveAsPurchaseOrder(myCart)`,
        `OrderContext.Current.GetPurchaseOrder(myCart.Owner, myCart.OrderGroupld)`,
        `OrderReference orderReference orderRepository.Save(cart)`,
        `IPurchase Order po = (IPurchaseOrder)orderRepoistory.Create<ICart>(cart.Name)`
      ],
      "correctAnswer": [1],
      "explanation": `SaveAsPurchaseOrder`,
    },
    {
      "question": `You need to add custom business processing when saving a purchase order. What step is required?`,
      "answers": [
        `Create a new MetaClass with a MetaField named "CustomSaving" of type Bool to extend the Purchase Order class.`,
        `Create a class that implements the IOrderRepository interface, and use the intercept pattern in an IInitializableModule.`,
        `Alter the CartCheckout workflow`,
        `Alter the file ecf.catalog.config.`,
        `Create a class inherits from IConfigurable Module to configure new class as implementation of Purchase Order.`
      ],
      "correctAnswer": [2],
      "explanation": `// NOTE: Create a class that implements the IOrderRepository interface (or inherits the DefaultOrderRepository) and use the intercept pattern in an IConfigurableModule.\n
      SaveAsPurchaseOrder()`,
    },
    {
      "question": `What is true about statuses for the order system?`,
      "answers": [
        `No statuses can have custom values`,
        `Only OrderStatus can be extended`,
        `Only OrderShipmentStatus can be extended`,
        `Both OrderStatus and OrderShipmentStatus can be extended`,
        `PaymentStatus can be extended`
      ],
      "correctAnswer": [4],
      "explanation": ``,
    },
    {
      "question": `You are selling office supplies and there are customers that need to get the same supplies recurring. How should you do that? `,
      "answers": [
        `Add a field to the customer contract, indicating that they need recurring orders. Create a scheduled job that periodically sends email to customers with that field to remind them to create order.`,
        `Add a new field to the order group, indication that it needs to be duplicated. Crate a scheduled job that looks for those orders, then duplicate them `,
        `Add new field to cart indicating that the cart should not be deleted when converting to order.
	Create a scheduled job that looks for those carts and create orders from them. `,
        `Create a payment plan for each customer and enable the scheduled job to create orders from the payment plans.`
      ],
      "correctAnswer": [4],
      "explanation": `payment plan`,
    },
    {
      "question": `A cart is filled with items. What of the following should not be executed when finalizing an order when shipments and payments are in places?`,
      "answers": [
        `mycart.ProcessPayments(...)`,
        `Call SaveAsPurchaseOrder(myCart) on an instance of IOrderRepository.`,
        `myCart.ApplyDiscounts (...)`,
        `Call Delete(mycart.OrderLink) on an instance of IOderRepository.`
      ],
      "correctAnswer": [3],
      "explanation": `myCart.ApplyDiscounts (...) (?) (thường cái này không cần gọi khi finalized order, đã được gọi by default), payment in place,nên đã có discount rồi`,
    },
    {
      "question": `What is the built-in way to calculate taxed in your checkout code?`,
      "answers": [
        `Use the CatalogTaxManager class.`,
        `Execute the Cart CheckoutActivity Flow`,
        `Calling GetTotal (ordergroup) on an instance of an IOrderGroupCalculator.`,
        `Taxes are automatically calculated when a cart is saved if the Variation Content.TaxCategory field is set.`
      ],
      "correctAnswer": [4],
      "explanation": `automatically calculated`,
    },
    {
      "question": `What is the built-in way to calculate taxed in your checkout code?`,
      "answers": [
        `Evaluate promotions for the whole cart.`,
        `Taxes are calculated automatically when a cart is converted to a PurchaseOrder.`,
        `Taxes are automatically calculated when a cart is saved if the VariationContentTaxCategory field is set`
      ],
      "correctAnswer": [3],
      "explanation": `VariationContent TaxCategory field is set`,
    },
    {
      "question": `You are using a fresh install of the latest packages from NuGet. What is the preferred way to add a Lineltem to the new pure and plain cart in a basic standard B2C site. No cart for the customer exists in the database.
		You have executed this code, which of the answer alternatives would be the next step?`,
      "answers": [
        `ICart theCart = _orderRepository.Create<ICart>((Guid)customer.PrimaryKeyId, "CartName");`,
        `ILineItem thelineItem new LineItem()
	{
		Quantity = 1
	}
	theLineItem.GetEntryContent();
	theCart.AddLineItem(thelineItem);`,
        `ILineltem theLineltem = _orderGroupFactory.CreatelineItem("Shirt 1", theCart);
	theLineItem.Quantity = 1;
	theCart. AddLineItem(theLineItem);`,
        `ILineItem theLineItem = _orderGroupFactory.CreatelineItem("Shirt 1", theCart);
	IShipment shipment = _orderGroupFactory.CreateShipment (theCart);
	theCart.AddlineItem(shipment, theLineItem);`,
        `ILineItem theLineItem = _orderGroupFactory.CreateLineItem("Shirt_1", theCart);
	IShipment shipment = _orderGroupFactory.CreateShipment (theCart);
	PurchaseOrderManager.AddLineItemToShipment((OrderGroup) theCart, theLineItem.LineItemId, (Shipment) shipment, theLineItem.Quantity);`
      ],
      "correctAnswer": [3],
      "explanation": `_orderGroupFactory; CreatelineItem; CreateShipment; Quantity=1`,
    },
    {
      "question": `You want to add functionality using a workflow activity, which sends e-mail order confirmation to customers. Which of the following is part of the process to create this functionality?`,
      "answers": [
        `Ensure that the system.net/mailSettings node is correctly configured in web.config`,
        `Download the Workflow activities samples from Episerver World.`,
        `Update Customer Contact Information to enable e-mail notification.`,
        `Replace the Mediachase Workflow CartCheckout workflow assembly.`
      ],
      "correctAnswer": [1],
      "explanation": `mailSettings; web.config`,
    },
    {
      "question": `You have a custom Business Foundation class in your solution. How should you increase the read performance of custom Business Foundation objects?`,
      "answers": [
        `Set the cache element attribute enable to true in baf.config.`,
        `Enable caching in baf.data.manager.config.`,
        `Set the Business Manager.Cache property to true`,
        `Create a caching layer on top of the Business Manager`,
        `Use the MetaClass Manager to implement custom caching`,
        `Use the Load method instead of the Execute method with Request and Response object`
      ],
      "correctAnswer": [1],
      "explanation": `baf.config`,
    },
    {
      "question": `You want to create your own workflow activity and add it to an existing workflow. Which two actions are needed?`,
      "answers": [
        `Inherit OrderGroupActivityBase and override the Execute method `,
        `Return status ActivityExecutionStatus.Closed when execution is completed`,
        `Use the Warnings dictionary to notify calling code when done`,
        `Create a reference to the new activity in the calling code`
      ],
      "correctAnswer": [1, 2],
      "explanation": `OrderGroupActivityBase; ActivityExecutionStatus.Closed`,
    },
    {
      "question": `Which two ways are valid to extend the Lineltem class with MetaFields to match and ERP definition?`,
      "answers": [
        `Using the content model.`,
        `Using the Administration subsystem in Commerce Manager.`,
        `Using the Order Management subsystem in Commerce Manager.`,
        `Using the Meta Field and MetaClass types in the namespace
	Mediachase.BusinessFoundation.Data.Meta.Management with code.`,
        `Using the MetaField and MetaClass types in the namespace
	Mediachase.MetaDataPlus.Configurator with code `
      ],
      "correctAnswer": [2, 5],
      "explanation": `Administration; MetaField and MetaClass; Mediachase.MetaDataPlus.Configurator`,
    },
    {
      "question": `You upgraded your Commerce Manager site from 7.5 to 8+ version. Which action is required to have the site functional?`,
      "answers": [
        `Update search configuration settings`,
        `Remove the Apps virtual directory from the IIS site`,
        `Reimport catalog`,
        `Update connectionstrings.config`
      ],
      "correctAnswer": [2],
      "explanation": `Apps virtual directory from the IIS`,
    },
    {
      "question": `You are upgrading from version 9 to version 10 and will use the newer and improved cart system, what are you required to do?`,
      "answers": [
        `Do nothing, configuration is automatically added by Episerver during upgrade`,
        `Add the feature SerializedCarts in ecf.app.config`,
        `Add the feature SerializedCarts in web.config`,
        `Add the feature WorkflowsVNext in ecf.order.config`,
        `Add the feature WorkflowsVNext in ecf.web.config`
      ],
      "correctAnswer": [2],
      "explanation": ``,
    },
    {
      "question": "Which can be done with media in a default Commerce installation?",
      "answers": [
        "Images can be moved between media folders using drag-and-drop",
        "Media items can be added to an XHTML string (255) using drag-and-drop",
        "The same media items are available when editing in both CMS and Commerce",
        "Images can be edited directly in the \"On-page editing\" view",
        "Add custom grouping of images"
      ],
      "correctAnswer": [1, 2, 3, 5],
      "explanation": "On-page editing"
    },
    {
      "question": "You want to write a class that sends an e-mail when a merchandiser creates a new product. Which service should be used to provide notification of the product creation?",
      "answers": [
        "ILinksRepository",
        "IContentRepository",
        "IContentEvents",
        "ICatalogSystem"
      ],
      "correctAnswer": [3],
      "explanation": ""
    },
    {
      "question": "A merchandiser wants to edit both the CMS and the Catalog user interfaces. As well as Commerce Manager, in a standard Commerce installation. Which (default roles) memberships will allow this?",
      "answers": [
        "The WebAdmins group and a structure group to edit in the page tree",
        "The WebEditors and WebAdmins groups",
        "The WebEditors, Commerce Admins and a structure group to edit in the page tree",
        "The WebAdmins and CommerceAdmins groups"
      ],
      "correctAnswer": [3, 4],
      "explanation": "we need CommerceAdmins role to access Commerce Manager (CM). We only need WebEditors to access (just) EditView of CMS WebAdmins is too powerful to access EditView"
    },
    {
      "question": `contentLink is a Content Reference to a product you want to change. What needs to be added to the end of the code to save the change?\n
          var contentRepository = ServiceLocator.Current.GetInstance<IContentRepository>();\n
          var product content = Repository.Get<MyProduct>(contentLink);\n
          product = (MyProduct)product.CreateWritableClone();\n
          product.Code = "AB123" ;\n
          <Enter code here>`,
      "answers": [
        "The product is saved when a new value is set, so no more code is needed",
        "CatalogContext.Current.Save(product, SaveAction.Publish);",
        "ProductAcceptChange();",
        "contentRepository.Save(product, SaveAction.Publish);"
      ],
      "correctAnswer": [4],
      "explanation": "use CMS Content API"
    },
    {
      "question": `You listen to the content event to ensure that every time the product is published, the name of product has a proper prefix attached to it. Is something missing from the following code and if so, what?\n
          private void Content EventsOnPublishingContent( object sender, ContentEventArgs contentEventArgs)\n
          {\n
          var content contentEventArgs.Content;\n
          var productContent content as ProductContent;\n
          if (productContent I= null)\n
            {\n
              product Content.Name [New productContent.Name;\n
          }\n
        }`,
      "fixed": true,
      "answers": [
        "No nothing, the code can run without problem",
        "Yes, productContent.CreateWriteableClone() as Product Content is missing",
        "Yes, contentRepository.Save(productContent, SaveAction Publish) is missing",
        "both b) and c) are missing"
      ],
      "correctAnswer": [4],
      "explanation": "use CMS Content API"
    },
    {
      "question": "You search with the document-based search provider model with the current language set to English and want to retrieve the object id(s) keys for a list of SKUs. Which snippet would give the desired result?",
      "answers": [
        `criteria.RecordsToRetrieve = 25;\n
            criteria.StartingRecord = 0;\n
            criteria.ClassTypes.Add(EntryType.Variation);\n
            \n
            ISearchResults searchResult = searchHelper.SearchEntries(criteria);\n
            int[] ints = searchResult.GetKeyFieldValues<int>();`,
        `criteria.RecordsToRetrieve = 25;\n
            criteria.StartingRecord = 0;\n
            criteria.Locale = "en";\n
            criteria.ClassTypes.Add(EntryType.Product);\n
            \n
            ISearchResults searchResult = searchHelper.SearchEntries(criteria);\n
            int[] ints = searchResult.GetKeyFieldValues<int>();`,
        `criteria.RecordsToRetrieve = 25;\n
            criteria.StartingRecord = 0;\n
            criteria.Locale = "en";\n
            criteria.ClassTypes.Add(EntryType.Variation);\n
            \n
            ISearchResults searchResult = searchHelper.SearchEntries(criteria);\n
            int[] ints = searchResult.GetKeyFieldValues<int>();`,
        `criteria.RecordsToRetrieve = 25;\n
            criteria.StartingRecord = 0;\n
            criteria.Locale = "en";\n
            criteria.ClassTypes.Add(EntryType.Variation);\n
            \n
            ISearchResults searchResult = searchHelper.SearchEntries(criteria);\n
            int[] ints = searchResult.GetKeyFieldValues<int>(0,
          "code");`
      ],
      "correctAnswer": [3],
      "explanation": ""
    },
    {
      "question": "In which file can search providers for the catalog be configured for the included document-based search provider model?",
      "answers": [
        "Mediachase.Search.Filters.config",
        "Ecf.catalog.config",
        "Web.config",
        "Mediachase.Search.config"
      ],
      "correctAnswer": [4],
      "explanation": ""
    },
    {
      "question": "What will not trigger an incremental document-based search filter build for the included Episerver Commerce search provider model?",
      "answers": [
        "Starting the Incremental Search Index schedule job",
        "Having the Index processor recovered and running",
        "Clicking 'Rebuild Index' in Commerce Manager",
        "Clicking 'Build Index' in Commerce Manager"
      ],
      "correctAnswer": [3],
      "explanation": "Rebuild index"
    },
    {
      "question": "How should you render the value of a property from a product in a template and make it available for on-page edit?",
      "answers": [
        "Use the <%= %> syntax to render the strongly typed property.",
        "Add an [Editable] attribute to the property definition.",
        "Render it using a control implementing IProperty Control.",
        "Render the property value in an asp:Literal web control.",
        "@Html.PropertyFor(m => m.SomeProperty)"
      ],
      "correctAnswer": [5],
      "explanation": "@Html.PropertyFor"
    },
    {
      "question": "Which is the correct way to get the URL of a product page?",
      "answers": [
        "var resolvedUrl= urlResolver.GetUrl(contentLink.ToString();",
        "var resolvedUrl= urlResolver.GetUrl(currentContent.ContentLink, currentContent.Language.Name);",
        "var resolvedUrl = UrlResolver.GetUrl(currentContent.ParentLink, currentContent.Language.Name);",
        "var resolvedUrl = UrlRewriteProvider.ConvertToExternal(url, currentContent.ContentLink, UTF8Encoding.UTF8);"
      ],
      "correctAnswer": [2],
      "explanation": ""
    },
    {
      "question": "To minimize the additional requirements needed for the PCI compliance for an e-commerce site, where should you store sensitive payment information in your Episerver Commerce database?",
      "answers": [
        "Nowhere",
        "In the CreditCardPayment object.",
        "Anywhere, as long as it's encrypted with at least 128bit",
        "In the Payment object."
      ],
      "correctAnswer": [1],
      "explanation": ""
    },
  ]
};
