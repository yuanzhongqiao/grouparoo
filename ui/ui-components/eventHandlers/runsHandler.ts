import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class RunsHandler extends EventDispatcher<Models.RunType[]> {}
