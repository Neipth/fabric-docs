export default [
    {
        text: "Guía para Desarrolladores",
        link: "/develop/",
        collapsed: false,
        items: [
            {
                text: "Fabric API GitHub",
                processSidebarURLs: false,
                translatable: false,
                link: "https://github.com/FabricMC/fabric",
            },
            {
                text: "Yarn GitHub",
                processSidebarURLs: false,
                translatable: false,
                link: "https://github.com/FabricMC/yarn",
            },
            {
                text: "Loom GitHub",
                processSidebarURLs: false,
                translatable: false,
                link: "https://github.com/FabricMC/fabric-loom",
            },
        ],
    },
    {
        text: "Primeros Pasos",
        collapsed: false,
        items: [
            {
                text: "Introducción a Fabric y Modding",
                link: "/develop/getting-started/introduction-to-fabric-and-modding",
            },
            {
                text: "Configuración del Entorno de Desarrollo",
                link: "/develop/getting-started/setting-up-a-development-environment",
            },
            {
                text: "Creación de un Proyecto",
                link: "/develop/getting-started/creating-a-project",
            },
            {
                text: "Estructura del Proyecto",
                link: "/develop/getting-started/project-structure",
            },
            {
                text: "Ejecución del Juego",
                link: "/develop/getting-started/launching-the-game",
            },
        ],
    },
    {
        text: "Items",
        collapsed: true,
        items: [
            {
                text: "Creación de un Item",
                link: "/develop/items/first-item",
            },
            {
                text: "Creación de Comida",
                link: "/develop/items/food",
            },
            {
                text: "Creación de Herramientas",
                link: "/develop/items/custom-tools",
            },
            {
                text: "Creación de Armaduras",
                link: "/develop/items/custom-armor",
            },
            {
                text: "Creación de Tabs",
                link: "/develop/items/custom-item-groups",
            },
            {
                text: "Creación de Items Interactivos",
                link: "/develop/items/custom-item-interactions",
            },
            {
                text: "Creación de Encantamientos",
                link: "/develop/items/custom-enchantment-effects",
            },
            {
                text: "Creación de Componentes de Datos",
                link: "/develop/items/custom-data-components",
            },
            {
                text: "Creación de Pociones",
                link: "/develop/items/potions",
            },
        ],
    },
    {
        text: "Bloques",
        collapsed: true,
        items: [
            {
                text: "Creación de un Bloque",
                link: "/develop/blocks/first-block",
            },
            {
                text: "Creación de un bloque con estado",
                link: "/develop/blocks/blockstates",
            },
            {
                text: "Creación de un bloque de entidad",
                link: "/develop/blocks/block-entities",
                items: [
                    {
                        text: "Bloque de entidad con renderizado",
                        link: "/develop/blocks/block-entity-renderer",
                    },
                ],
            },
        ],
    },
    {
        text: "develop.entities",
        collapsed: true,
        items: [
            {
                text: "develop.entities.effects",
                link: "/develop/entities/effects",
            },
            {
                text: "develop.entities.damage-types",
                link: "/develop/entities/damage-types",
            },
        ],
    },
    {
        text: "develop.sounds",
        collapsed: true,
        items: [
            {
                text: "develop.sounds.using-sounds",
                link: "/develop/sounds/using-sounds",
            },
            {
                text: "develop.sounds.custom",
                link: "/develop/sounds/custom",
            },
            {
                text: "develop.sounds.dynamic-sounds",
                link: "/develop/sounds/dynamic-sounds",
            },
        ],
    },
    {
        text: "develop.commands",
        collapsed: true,
        items: [
            {
                text: "develop.commands.basics",
                link: "/develop/commands/basics",
            },
            {
                text: "develop.commands.arguments",
                link: "/develop/commands/arguments",
            },
            {
                text: "develop.commands.suggestions",
                link: "/develop/commands/suggestions",
            },
        ],
    },
    {
        text: "develop.rendering",
        collapsed: true,
        items: [
            {
                text: "develop.rendering.basicConcepts",
                link: "/develop/rendering/basic-concepts",
            },
            {
                text: "develop.rendering.drawContext",
                link: "/develop/rendering/draw-context",
            },
            {
                text: "develop.rendering.hud",
                link: "/develop/rendering/hud",
            },
            {
                text: "develop.rendering.gui",
                items: [
                    {
                        text: "develop.rendering.gui.customScreens",
                        link: "/develop/rendering/gui/custom-screens",
                    },
                    {
                        text: "develop.rendering.gui.customWidgets",
                        link: "/develop/rendering/gui/custom-widgets",
                    },
                ],
            },
            {
                text: "develop.rendering.particles",
                items: [
                    {
                        text: "develop.rendering.particles.creatingParticles",
                        link: "/develop/rendering/particles/creating-particles",
                    },
                ],
            },
        ],
    },
    {
        text: "develop.dataGeneration",
        collapsed: true,
        items: [
            {
                text: "develop.dataGeneration.setup",
                link: "/develop/data-generation/setup",
            },
            {
                text: "develop.dataGeneration.tags",
                link: "/develop/data-generation/tags",
            },
            {
                text: "develop.dataGeneration.translations",
                link: "/develop/data-generation/translations",
            },
            {
                text: "develop.dataGeneration.advancements",
                link: "/develop/data-generation/advancements",
            },
            {
                text: "develop.dataGeneration.recipes",
                link: "/develop/data-generation/recipes",
            },
            {
                text: "develop.dataGeneration.lootTables",
                link: "/develop/data-generation/loot-tables",
            },
            {
                text: "develop.dataGeneration.blockModels",
                link: "/develop/data-generation/block-models",
            },
        ],
    },
    {
        text: "develop.misc",
        collapsed: true,
        items: [
            {
                text: "develop.misc.codecs",
                link: "/develop/codecs",
            },
            {
                text: "develop.misc.events",
                link: "/develop/events",
            },
            {
                text: "develop.misc.text-and-translations",
                link: "/develop/text-and-translations",
            },
            {
                text: "develop.misc.ideTipsAndTricks",
                link: "/develop/ide-tips-and-tricks",
            },
            {
                text: "develop.misc.automatic-testing",
                link: "/develop/automatic-testing",
            },
            {
                text: "develop.misc.loom",
                link: "/develop/loom",
                items: [
                    {
                        text: "develop.misc.loom.fabric-api",
                        link: "/develop/loom/fabric-api",
                    },
                    {
                        text: "develop.misc.loom.options",
                        link: "/develop/loom/options",
                    },
                    {
                        text: "develop.misc.loom.prod",
                        link: "/develop/loom/production-run-tasks",
                    }
                ]
            },
        ],
    },
];
