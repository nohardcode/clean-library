import BaseEntity from './Base';

export default class Book extends BaseEntity {
  public title: string;
  public description: string;
  public genre: string;
}