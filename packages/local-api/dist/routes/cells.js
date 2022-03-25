"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCellsRouter = void 0;
const express_1 = __importDefault(require("express"));
const createCellsRouter = (filename, dir) => {
    const router = express_1.default.Router();
    router.get('/cells', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // Make sure the cell storage file exists
        // If the file doesn't exist, add in a default list of cells
        // Read the file
        // Parse the list of cells out of it
        // Send the list of cells to browser
    }));
    router.post('/cells', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // Make sure the file exists
        // If not, create it
        // Take the list of cells from the req obj
        // Serialize them
        // Write the cells into the file
    }));
    return router;
};
exports.createCellsRouter = createCellsRouter;
