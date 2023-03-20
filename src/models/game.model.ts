import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Game extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  status: string;

  @Column
  created_at: Date;

  @Column
  updated_at: Date;
}
