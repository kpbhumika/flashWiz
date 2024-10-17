const Model = require("./Model.js");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
    fields: ["email"],
});

class User extends unique(Model) {
    static get tableName() {
        return "users";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["username", "email"],
            properties: {
                id: { type: "integer" },
                username: { type: "string", minLength: 2 },
                email: { type: "string", format: "email" },
            },
        };
    }

    static get relationMappings() {
        const { Deck } = require("./index.js");
        return {
            decks: {
                relation: Model.HasManyRelation,
                modelClass: Deck,
                join: {
                    from: "users.id",
                    to: "decks.userId",
                },
            },
        };
    }
}

module.exports = User;
