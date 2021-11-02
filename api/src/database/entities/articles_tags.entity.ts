import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'articles_tags' })
export class ArticlesTages extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('int', { name: 'article_id' })
  article_id!: number;

  @Column('int', { name: 'tag_id' })
  tag_id!: number;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt!: Date;
}
