import { PlayersApi } from '../generated'
import type {
  GetPlayerRequest,
  PlayerCreateRequest,
  PlayerDeleteResponse,
  PlayerListQueries,
  PlayerListResponse,
  PlayerResponse,
  UpdatePlayerRequest,
} from '../models'
import { httpErrorHandler } from '../utilities/httpErrorHandler'
import { BaseApiWrapper } from './baseApiWrapper'

@httpErrorHandler
export class PlayersApiWrapper extends BaseApiWrapper<PlayersApi> {
  static type = 'players'

  constructor(accessToken: string, basePath?: string) {
    super(PlayersApi, accessToken, basePath)
  }

  /**
   * Creates a player object.
   * @param req Parameters to create a player
   */
  public async create(req: PlayerCreateRequest): Promise<PlayerResponse> {
    return await this.api.createPlayer(req)
  }

  /**
   * Retrieves the details of an existing player. Supply the unique player ID from either a player creation request or the player list, and Openfort will return the corresponding player information.
   * @param req Criteria to get the player.
   */
  public async get(req: GetPlayerRequest): Promise<PlayerResponse> {
    return await this.api.getPlayer(req.id, req.expand)
  }

  /**
   * Returns a list of your players. The players are returned sorted by creation date, with the most recently created players appearing first.
   * @param req Criteria to retrieve the list of the players
   */
  public async list(req?: PlayerListQueries): Promise<PlayerListResponse> {
    return await this.api.getPlayers(
      req?.limit,
      req?.skip,
      req?.order,
      req?.expand,
      req?.name,
    )
  }

  /**
   * Updates a player object.
   * @param req Parameters to update player
   */
  public async update(req: UpdatePlayerRequest): Promise<PlayerResponse> {
    const { id, ...body } = req
    return await this.api.updatePlayer(id, body)
  }

  /**
   * Deletes a player object.
   * @param id Player id to delete
   */
  public async delete(id: string): Promise<PlayerDeleteResponse> {
    return await this.api.deletePlayer(id)
  }
}
