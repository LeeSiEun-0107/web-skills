import {apptestCollection} from "./data/apptest.js";
import {buildtoolCollection} from "./data/build-tool.js";
import {cssCollection} from "./data/css.js";
import {cssframeworkCollection} from "./data/css-framework.js";
import {cssprocessorCollection} from "./data/css-processor.js";
import {desktopapplicationCollection} from "./data/desktopapplication.js";
import {frameworkCollection} from "./data/framework.js";
import {graphqlCollection} from "./data/graphql.js";
import {htmlCollection} from "./data/html.js";
import {internetCollection} from "./data/internet.js";
import {javascriptCollection} from "./data/javascript.js";
import {mobileapplicationCollection} from "./data/mobileapplication.js";
import {nowcssCollection} from "./data/now-css.js";
import {packagemanageCollection} from "./data/package-manage.js";
import {progressivewebappsCollection} from "./data/progressive-web-apps.js";
import {sccstructureCollection} from "./data/scc-structure.js";
import {ssrCollection} from "./data/ssr.js";
import {staticsitegeneratorCollection} from "./data/static-site-generator.js";
import {typeinspectionCollection} from "./data/type-inspection.js";
import {versionmanagementCollection} from "./data/version-management.js";
import {webassemblerCollection} from "./data/web-assembler.js";
import {webcomponentsCollection} from "./data/web-components.js";
import {websecurityCollection}from "./data/web-security.js";
import {cssarchitectureCollection}from "./data/cssarchitecture.js";
/**
 * All available collections.
 */
export const collections = [
	internetCollection,
	htmlCollection,
	cssCollection,
	javascriptCollection,
	versionmanagementCollection,
	websecurityCollection,
	packagemanageCollection,
	cssarchitectureCollection,
	cssprocessorCollection,
	buildtoolCollection,
	frameworkCollection,
	nowcssCollection,
	webcomponentsCollection,
	cssframeworkCollection,
	apptestCollection,
	typeinspectionCollection,
	progressivewebappsCollection,
	ssrCollection,
	graphqlCollection,
	staticsitegeneratorCollection,
	mobileapplicationCollection,
	desktopapplicationCollection,
	webassemblerCollection
];