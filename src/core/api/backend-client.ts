import { KnowledgeCategory, ContactDataPostArgs } from "../types";
import { IHttpClient, IBackendClient } from "./types";

export class BackendClient implements IBackendClient {
  private client: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.client = httpClient;
  }

  async getKnowledgeCategories(): Promise<KnowledgeCategory[]> {
    return await this.client.get<KnowledgeCategory[]>(`/get_knowledge/`);
  }

  async postContactData(args: ContactDataPostArgs): Promise<void> {
    console.log("Inside postContactData...");
    await this.client.post<ContactDataPostArgs, null>(
      `/contact_form_test/`,
      args,
    );
  }
}
