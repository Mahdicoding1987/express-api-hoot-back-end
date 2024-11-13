const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
      text: {
        type: String,
        required: true
      },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
  );

const hootSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
        enum: ['News', 'Sports', 'Games', 'Movies', 'Music', 'Television'],
      },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comments: [commentSchema]
    },
    { timestamps: true }
  );

  router.put('/:hootId/comments/:commentId', async (req, res) => {
    try {
      const hoot = await Hoot.findById(req.params.hootId);
      const comment = hoot.comments.id(req.params.commentId);
      comment.text = req.body.text;
      await hoot.save();
      res.status(200).json({ message: 'Ok' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

const Hoot = mongoose.model('Hoot', hootSchema);

module.exports = Hoot;