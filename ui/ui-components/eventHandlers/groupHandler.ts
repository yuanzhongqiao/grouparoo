import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class GroupHandler extends EventDispatcher<Models.GroupType> {}
