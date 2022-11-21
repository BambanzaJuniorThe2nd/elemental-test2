import { Author, AuthorProfile, KnowledgeCategory } from "../types";
import { IHttpClient, IBackendClient } from "./types";

export class BackendClient implements IBackendClient {
  private client: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.client = httpClient;
  }

  async getKnowledgeCategories(): Promise<KnowledgeCategory[]> {
    console.log("Inside getKnowledgeCategories");
    return await this.client.get<KnowledgeCategory[]>(`/get_knowledge/`);
  }

  async getAuthorProfile(authorId: string): Promise<AuthorProfile> {
    return await this.client.get<AuthorProfile>(`/author/${authorId}`);
  }
}
