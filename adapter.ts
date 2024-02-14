import type { Address, Expression, ExpressionAdapter, PublicSharing, LanguageContext, AgentService } from "https://esm.sh/@perspect3vism/ad4m@0.5.0";

// Put adapter is responsible for creating a public expression that can be
// shared with others.
class PutAdapter implements PublicSharing {
  #agent: AgentService;

  // Assign any values to the put adapter here all the initialization goes here
  constructor(context: LanguageContext) {
    this.#agent = context.agent;
  }

  // This method is responsible for creating a public expression
  async createPublic(data: any): Promise<Address> {}
}

// Adapter is responsible for getting the expression from the network
export default class Adapter implements ExpressionAdapter {
  putAdapter: PublicSharing;

  constructor(context: LanguageContext) {
    this.putAdapter = new PutAdapter(context);
  }

  // use the expression address to fetch the expression from the network
  async get(address: Address): Promise<Expression> {}
}

