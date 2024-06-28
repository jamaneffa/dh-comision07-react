module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorMovie';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: {
        //     type: dataTypes.TIMESTAMP,
        //     allowNull: false,
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        // },
        // updated_at: {
        //     type: dataTypes.TIMESTAMP,
        //     allowNull: false,
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        // },
        actor_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'actors', 
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        movie_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'movies', 
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    };

    let config = {
        tableName: 'actor_movie',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };

    const ActorMovie = sequelize.define(alias, cols, config);

    return ActorMovie;
};